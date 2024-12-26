const { start } = require("../controllers/comads.js");
const { sendTermos } = require("../controllers/comads2.js");
const { sendStart } = require("../controllers/comads3.js");
const { sendCard } = require("../controllers/comads4.js");
const { sendCardFull } = require("../controllers/comads5.js");
const { sendPix } = require("../controllers/comads7.js");
const { sendDeposito } = require("../controllers/comads6.js");
const {updateSaldo} = require("../controllers/comads9.js");
const { sendSaldoDeposito } = require("../controllers/comads8.js");
const { sendMix } = require("../controllers/comads10.js");
const { sendCarteira } = require("../controllers/comads11.js");
const { sendFree } = require("../controllers/comads12.js");
const { sendVip } = require("../controllers/comads13.js");
const { sendCardCC } = require("../controllers/comads14.js");
const { accessGrupoVip } = require("../controllers/comads15.js");

const callbackHandlers = {
  start: start,
  termos: sendTermos,
  cartao: sendCard,
  card2: sendCardFull,
  back: sendStart,
  backcard: sendCard,
  saldo: sendPix,
  deposito: sendDeposito,
  addSaldo: sendSaldoDeposito,
  add_1: updateSaldo,
  add_5: updateSaldo,
  add_10: updateSaldo,
  add_25: updateSaldo,
  sub_1: updateSaldo,
  sub_5: updateSaldo,
  sub_10: updateSaldo,
  sub_25: updateSaldo,
  mix: sendMix,
  carteira: sendCarteira,
  free: sendFree,
  vip: sendVip,
  cardcc: sendCardCC,
  grupovip: accessGrupoVip
};

module.exports = callbackHandlers;
