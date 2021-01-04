import { DarukServer } from 'daruk';
import { resolve } from './util/path';

export default async function getApp() {
  const darukApp = DarukServer({
    rootPath: resolve('.'),
    middlewareOrder: [
      'error',
      'koa-ejs'
    ],
  });
  await darukApp.loadFile('src/middleware');
  await darukApp.loadFile('src/controller');
  await darukApp.binding();
  return darukApp;
}
