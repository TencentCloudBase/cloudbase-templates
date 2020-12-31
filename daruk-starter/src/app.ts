import { DarukServer, controller, get, DarukContext } from 'daruk';

export default async function getApp() {
  const darukApp = DarukServer();

  @controller()
  class Index {
    @get('/')
    public async index(ctx: DarukContext) {
      ctx.body = 'hello daruk';
    }
  }

  await darukApp.binding();
  return darukApp;
}

