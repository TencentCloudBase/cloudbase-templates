import getApp from './app';

(async () => {
  const app = await getApp();
  const port = 3000;
  console.log(`server start at http://127.0.0.1:${port}`);
  app.listen(port);
})();
