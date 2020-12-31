const tcbApp = require('./app');

(async () => {
  const app = await tcbApp.tcbGetApp();
  const port = 3000;
  console.log('server start at port:', port);
  app.listen(port);
})();
