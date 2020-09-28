'use strict';

const { Application } = require('egg');

exports.tcbGetApp = () => {
  return new Application({
    env: 'prod',
  });
};
