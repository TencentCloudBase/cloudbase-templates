const getApp = require('./dist/app').default;

async function tcbGetApp () {
  const app = await getApp();
  return app;
}

exports.tcbGetApp = tcbGetApp;
