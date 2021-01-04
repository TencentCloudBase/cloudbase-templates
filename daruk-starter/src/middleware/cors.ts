import {
  Daruk,
  DarukContext,
  defineMiddleware,
  MiddlewareClass,
  Next,
} from 'daruk';

@defineMiddleware('cors')
export default class Cors implements MiddlewareClass {
  public initMiddleware(daruk: Daruk) {
    return async (ctx: DarukContext, next: Next) => {
      ctx.set('Access-Control-Allow-Origin', '*');
      ctx.set(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
      );
      await next();
    };
  }
}
