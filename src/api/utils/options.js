function optionsStart() {
  const options = {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
        [{ text: "💳 Cartões", callback_data: "cartao" }],
        [
          { text: "💠 Adicione Saldo", callback_data: "saldo" },
          { text: "💸 Carteira", callback_data: "carteira" },
        ],
        [
          { text: "🤑 Saldo Gratuito", callback_data: "free" },
          { text: "Termos ou Trocas", callback_data: "termos" },
        ],
        [{ text: "🎰 GP DE METODOS E ESQUEMAS VIP", callback_data: "vip" }],
      ],
    },
  };
  return options;
}

module.exports = optionsStart