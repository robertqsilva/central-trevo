const { Payment, MercadoPagoConfig } = require("mercadopago");
const { addSaldoUser } = require("../database/database_services");

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

async function checkPayment(id_payment, chat_id) {
  let elapsedTime = 0;
  const maxTime = 10 * 60;
  const intervalTime = 5;

  const intervalId = setInterval(async () => {
    const statusPayment = await payment.get({
      id: id_payment,
    });

    if (statusPayment.status === "approved") {
      await addSaldoUser(chat_id, statusPayment.transaction_amount);
      console.log("Pagamento aprovado!");
      clearInterval(intervalId);
      return;
    } else {
      console.log("Pagamento ainda não aprovado...");
    }

    elapsedTime += intervalTime;
    if (elapsedTime >= maxTime) {
      console.log("Tempo limite de 10 minutos atingido.");
      clearInterval(intervalId); // Para o intervalo após 10 minutos
    }
  }, intervalTime * 1000);
}

module.exports = { createPayment, checkPayment };
