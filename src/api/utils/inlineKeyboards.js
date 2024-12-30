function inlineKeyboardStart() {
  const options = {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "🎰 GP DE METODOS E ESQUEMAS VIP",
            callback_data: "vipmessage",
          },
        ],
        [
          { text: "💠 Adicione Saldo", callback_data: "addmoney" },
          { text: "💸 Carteira", callback_data: "infoAcounts" },
        ],
        [
          { text: "🤑 Saldo Gratuito", callback_data: "afiliate" },
          { text: "🎰 Lista de métodos", callback_data: "methods" },
        ],
      ],
    },
  };
  return options;
}

function inlineKeyboardDeposit() {
  const options = {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "+1", callback_data: "add_1" },
          { text: "+5", callback_data: "add_5" },
          { text: "+10", callback_data: "add_10" },
          { text: "+25", callback_data: "add_25" },
        ],
        [
          { text: "-1", callback_data: "sub_1" },
          { text: "-5", callback_data: "sub_5" },
          { text: "-10", callback_data: "sub_10" },
          { text: "-25", callback_data: "sub_25" },
        ],
        [{ text: "Confirmar", callback_data: "deposit" }],
        [{ text: "❮ ❮ Voltar", callback_data: "money" }],
      ],
    },
  };
  return options;
}

function inlineKeyboardGroupVip(){
  const options = {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "🍀 ENTRAR NO GRUPO VIP 🍀",
            callback_data: "groupvipaccess",
          },
        ],
        [{ text: "❮ ❮ Voltar", callback_data: "back" }],
      ],
    },
  };
  return options
}

function inlineKeyboardTypePayment(){
  return (options = {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
        [{ text: "💠 Pix Automatico", callback_data: "addmoney" }],
        [{ text: "❮ ❮ Voltar", callback_data: "back" }],
      ],
    },
  });

}

module.exports = {
  inlineKeyboardStart,
  inlineKeyboardDeposit,
  inlineKeyboardGroupVip,
  inlineKeyboardTypePayment,
};
