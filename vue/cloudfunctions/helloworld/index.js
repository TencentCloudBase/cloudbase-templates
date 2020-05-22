const cloud = require(" @cloudbase/node-sdk");

const app = cloud.init({
  env: tcb.SYMBOL_CURRENT_ENV,
});

exports.main = async (event, context) => {
  // todo
  // your code here
  return event;
};
