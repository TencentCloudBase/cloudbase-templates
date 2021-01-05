import { DarukServer } from 'daruk';

export default async function getApp() {
  const darukApp = DarukServer({
    rootPath: __dirname,
    middlewareOrder: [
      'error',
      'koa-static',
      'koa-ejs'
    ],
  });
  await darukApp.loadFile('middleware');
  await darukApp.loadFile('controller');
  await darukApp.binding();
  return darukApp;
}
