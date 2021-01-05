const tcbApp = require('./app');

(async () => {
  const app = await tcbApp.tcbGetApp();
  const port = 3000;
  console.log(`server start at http://127.0.0.1:${port}`, );
  app.listen(port);
})();
