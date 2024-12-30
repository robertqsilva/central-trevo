const { firstStart } = require("../controllers/first_start_controllers.js");
const {
  accessMainMessageStart,
} = require("../controllers/start_controllers.js");
const {
  selectTypePayment,
} = require("../controllers/select_payment_type_controllers.js");
const { makeDeposit } = require("../controllers/deposit_pix_controllers.js");
const {
  updateMoneyDeposit,
} = require("../controllers/logic_choose_deposit_amount_controllers.js");
const {
  chooseDepositAmount,
} = require("../controllers/choose_deposit_amount_controllers.js");
const {
  accountInfomations,
} = require("../controllers/account_information_controllers.js");
const {
  generateaAfiliateLink,
} = require("../controllers/affiliated_controllers.js");
const { groupVipmessage } = require("../controllers/group_vip_controllers.js");
const {
  accessGroupVip,
} = require("../controllers/vip_group_access_logic_controllers.js");
const { methodsList } = require("../controllers/methodsList.js");

const callbackHandlers = {
  start: firstStart,
  back: accessMainMessageStart,
  money: selectTypePayment,
  deposit: makeDeposit,
  addmoney: chooseDepositAmount,
  add_1: updateMoneyDeposit,
  add_5: updateMoneyDeposit,
  add_10: updateMoneyDeposit,
  add_25: updateMoneyDeposit,
  sub_1: updateMoneyDeposit,
  sub_5: updateMoneyDeposit,
  sub_10: updateMoneyDeposit,
  sub_25: updateMoneyDeposit,
  infoAcounts: accountInfomations,
  afiliate: generateaAfiliateLink,
  vipmessage: groupVipmessage,
  groupvipaccess: accessGroupVip,
  methods: methodsList,
};

module.exports = callbackHandlers;
