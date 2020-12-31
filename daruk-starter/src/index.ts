import getApp from './app';

(async () => {
  const app = await getApp();
  app.listen(3000);
})();
