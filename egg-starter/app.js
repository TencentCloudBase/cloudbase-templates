'use strict';

const { Application } = require('egg');

const app = new Application({
  env: 'prod',
});

module.exports = app;
