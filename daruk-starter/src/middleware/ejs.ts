import ejs from 'koa-ejs';
import {
  resolve,
} from '../util/path';
import {
  Daruk,
  defineMiddleware,
  MiddlewareClass,
  DarukContext,
  Next,
} from 'daruk';

@defineMiddleware('koa-ejs')
export default class KoaEjs implements MiddlewareClass {
  public initMiddleware(daruk: Daruk) {
    return async (ctx: DarukContext, next: Next) => {
      ejs(daruk.app, {
        root: resolve('view'),
        viewExt: 'ejs',
        layout: false,
      });
      await next();
    };
  }
}
