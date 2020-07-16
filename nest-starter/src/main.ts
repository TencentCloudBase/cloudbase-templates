import express from 'express';
import { NestFactory } from '@nestjs/core';
import {
  ExpressAdapter,
  NestExpressApplication,
} from '@nestjs/platform-express';

import { AppModule } from './app.module';

const expressApp = express();
const adapter = new ExpressAdapter(expressApp);
const port = process.env.PORT || 5000;

export async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    adapter,
  );

  // 隐藏 x-powered-by: express header
  app.disable('x-powered-by');

  // 兼容云函数与本地开发
  if (process.env.NODE_ENV === 'development') {
    await app.listen(port);
  } else {
    await app.init();
  }

  return expressApp;
}

// 开发模式下启动开发
if (process.env.NODE_ENV === 'development') {
  bootstrap().then(() => {
    console.log(`App listen on http://localhost:${port}`);
  });
}
