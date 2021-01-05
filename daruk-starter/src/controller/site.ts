import {
  controller,
  get,
  DarukContext,
} from 'daruk';
import {
  requestRoot,
} from '../util/path';

@controller()
export default class Site {
  @get('/')
  public async index(ctx: DarukContext) {
    console.log('process.env:', process.env);
    await ctx.render('home', {
      title: 'home',
      headers: ctx.headers,
      pathname: requestRoot(),
    });
  }

  @get('/error')
  public async error(ctx: DarukContext) {
    throw new Error('custom error');
  }
}
