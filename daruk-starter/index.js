const tcbApp = require('./app');

(async () => {
  const app = await tcbApp.tcbGetApp();
  app.listen(3000);
})();
