import {
  controller,
  middleware,
  get,
  DarukContext,
} from 'daruk';

@controller()
export default class Site {
  @get('/')
  public async index(ctx: DarukContext) {
    let pathname = `/${process.env.SCF_FUNCTIONNAME}`;
    await ctx.render('home', {
      title: 'home',
      headers: ctx.headers,
      env: process.env,
      pathname,
    });
  }

  @get('/error')
  public async error(ctx: DarukContext) {
    throw new Error('custom error');
  }
}
