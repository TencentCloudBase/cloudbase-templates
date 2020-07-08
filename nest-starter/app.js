const express = require('express');
const { NestFactory } = require('@nestjs/core');
const { ExpressAdapter } = require('@nestjs/platform-express');
const { AppModule } = require('./dist/app.module');

// create express adapter
const expressApp = express();
const adapter = new ExpressAdapter(expressApp);

exports.tcbGetApp = async () => {
  // create app
  const app = await NestFactory.create(AppModule, adapter);
  // uncomment next line if you want to enable cors
  // app.enableCors();
  await app.init();
  return expressApp;
};
