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
    let pathname = ctx.path
    pathname = pathname.replace(/\/$/, '');
    await ctx.render('home', {
      title: 'home',
      pathname,
    });
  }

  @get('/error')
  public async error(ctx: DarukContext) {
    throw new Error('custom error');
  }
}
