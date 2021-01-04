import {
  controller,
  middleware,
  get,
  DarukContext,
} from 'daruk';

@controller()
export default class Site {
  @get('/api/cors')
  @middleware('cors')
  public async cors(ctx: DarukContext) {
    ctx.body = {
      code: 0,
      message: '',
      data: {
        text: 'CORS supported'
      }
    };
  }

  @get('/api/info')
  public async info(ctx: DarukContext) {
    ctx.body = {
      code: 0,
      message: '',
      data: {
        text: 'CORS not support'
      }
    };
  }

  @get('/api/error')
  public async error(ctx: DarukContext) {
    throw new Error('custom error');
  }
}
