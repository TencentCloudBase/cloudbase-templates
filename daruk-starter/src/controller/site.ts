import {
  controller,
  middleware,
  get,
  DarukContext,
} from 'daruk';

@controller()
export default class Site {
  @get('/')
  @middleware('koa-ejs')
  public async index(ctx: DarukContext) {
    await ctx.render('home', {
      title: 'home',
      pathname: '',
    });
  }
}
