import {
  Daruk,
  defineMiddleware,
  MiddlewareClass,
  DarukContext,
  Next,
} from 'daruk';

@defineMiddleware('error')
export default class KoaEjs implements MiddlewareClass {
  public initMiddleware(daruk: Daruk) {
    return async (ctx: DarukContext, next: Next) => {
      try {
        await next();
      } catch (err) {
        ctx.logger?.error(err);
        ctx.status = 500;
        const pathname = ctx?.path;
        if (pathname && pathname.indexOf("/api/") === 0) {
          ctx.body = {
            code: -1,
            msg: err.message,
            data: err.stack,
          };
        } else {
          await ctx.render('error', {
            title: "Error",
            status: ctx.status,
            message: err.message,
            stack: err.stack,
          });
        }
      }
    };
  }
}
