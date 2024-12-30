const { Payment, MercadoPagoConfig } = require("mercadopago");
const { addMoneyDB, getUserDB } = require("../database/database_services");
const sucessPaymentMessage = require("../../controllers/sucesspayment");

const client = new MercadoPagoConfig({
  accessToken: process.env.TOKEN_GATEWAY,
});
const payment = new Payment(client);

async function createPayment(transaction_amount, description) {
  const createPaymentPix = await payment.create({
    body: {
      transaction_amount,
      description,
      payment_method_id: "pix",
      date_of_expiration: new Date(
        new Date().getTime() + 10 * 60 * 1000
      ).toISOString(),
      payer: {
        email: process.env.MAIL,
        identification: {
          type: "CPF",
          number: process.env.CPF,
        },
      },
    },
  });

  const { qr_code, qr_code_base64 } =
    createPaymentPix.point_of_interaction.transaction_data;

  return {
    code: qr_code,
    code_base64: qr_code_base64,
    id: createPaymentPix.id,
  };
}

async function checkPayment(id_payment, chat_id, bot, userName) {
  let elapsedTime = 0;
  const maxTime = 10 * 60;
  const intervalTime = 5;

  const intervalId = setInterval(async () => {
    const statusPayment = await payment.get({
      id: id_payment,
    });

    if (statusPayment.status === "approved") {
      const { money } = await getUserDB(chat_id);
      await addMoneyDB(chat_id, Number(statusPayment.transaction_amount) + Number(money));
      sucessPaymentMessage(bot, chat_id, userName);
      clearInterval(intervalId);

      return;
    } else {
    }

    elapsedTime += intervalTime;
    if (elapsedTime >= maxTime) {
      clearInterval(intervalId);
    }
  }, intervalTime * 1000);
}

module.exports = { createPayment, checkPayment };
