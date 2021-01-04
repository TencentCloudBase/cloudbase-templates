import { DarukServer } from 'daruk';

export default async function getApp() {
  const darukApp = DarukServer();
  await darukApp.loadFile('./middleware');
  await darukApp.loadFile('./controller');
  await darukApp.binding();
  return darukApp;
}
