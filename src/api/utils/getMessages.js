const fs = require("fs");
const path = require("path");

const paths = {
  start: path.join(__dirname, "../../../public/start.txt"),
  accessGroupVip: path.join(__dirname, "../../../public/accessGroupVip.txt"),
  affiliated: path.join(__dirname, "../../../public/affiliated.txt"),
  money: path.join(__dirname, "../../../public/money.txt"),
  deposit: path.join(__dirname, "../../../public/deposit.txt"),
  depositAmount: path.join(__dirname, "../../../public/depositAmount.txt"),
  groupVip: path.join(__dirname, "../../../public/groupVip.txt"),
  infoAccount: path.join(__dirname, "../../../public/infoAccount.txt"),
  selectTypePayment: path.join(
    __dirname,
    "../../../public/selectTypePayment.txt"
  ),
  sucessPaymentMessage: path.join(
    __dirname,
    "../../../public/sucessPayment.txt"
  ),
  methodsList: path.join(__dirname, "../../../public/methodsList.txt"),
};

const getmessages = {
  getMessageStart: (money, chatId) => {
    const message = fs.readFileSync(paths.start, "utf8");

    return message
      .replace("{money}", Number(money).toFixed(2))
      .replace("{chatId}", chatId);
  },

  accessGroupVip: (userName, link) => {
    const message = fs.readFileSync(paths.accessGroupVip, "utf8");

    return message.replace("{userName}", userName).replace("{link}", link);
  },

  affiliated: (chatId) => {
    const message = fs.readFileSync(paths.affiliated, "utf8");

    return message.replace("{chatId}", chatId);
  },

  money: (amount) => {
    const message = fs.readFileSync(paths.money, "utf8");

    return message.replace("{amount}", Number(amount).toFixed(2));
  },

  deposit: (codepix, transaction_amount) => {
    const message = fs.readFileSync(paths.deposit, "utf8");

    return message
      .replace("{codepix}", codepix)
      .replace("{transaction_amount}", Number(transaction_amount).toFixed(2));
  },

  depositAmount: (money) => {
    const message = fs.readFileSync(paths.depositAmount, "utf8");

    return message.replace("{money}", Number(money.toFixed(2)));
  },

  groupVip: () => {
    const message = fs.readFileSync(paths.groupVip, "utf8");

    return message;
  },

  infoAccount: (chatId, money) => {
    const message = fs.readFileSync(paths.infoAccount, "utf8");

    return message
      .replace("{chatId}", chatId)
      .replace("{money}", Number(money).toFixed(2));
  },

  selectTypePayment: () => {
    const message = fs.readFileSync(paths.selectTypePayment, "utf8");

    return message;
  },

  sucessPayment: (userName) => {
    const message = fs.readFileSync(paths.sucessPaymentMessage, "utf8");
    return message.replace("{userName}", userName);
  },

  methods: () => {
    const message = fs.readFileSync(paths.methodsList, "utf8");
    return message
  },
};

module.exports = getmessages;
