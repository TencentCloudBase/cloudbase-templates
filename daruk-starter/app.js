const getApp = require('./dist/app').default;

async function tcbGetApp () {
  const darukApp = await getApp();
  return darukApp.app;
}

exports.tcbGetApp = tcbGetApp;
