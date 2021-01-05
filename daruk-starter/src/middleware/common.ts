import ejs from 'koa-ejs';
import koaStatic from 'koa-static';
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
export class KoaEjs implements MiddlewareClass {
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

@defineMiddleware('koa-static')
export class KoaStatic implements MiddlewareClass {
  public initMiddleware(daruk: Daruk) {
    return async (ctx: DarukContext, next: Next) => {
      daruk.app.use(koaStatic(resolve('./public')));
      await next();
    };
  }
}
