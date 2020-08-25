'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.type = 'html';
    ctx.body = `<!DOCTYPE html>
<html>
  <head>
    <title>Tencent CloudBase + Egg.js</title>
  </head>
  <body>
    <h1>Tencent CloudBase + Egg.js</h1>
    <p>Welcome to Tencent CloudBase + Egg.js</p>
    <h2>本示例 Github 源码地址</h2>
    <a href="https://github.com/TencentCloudBase/cloudbase-templates/tree/master/egg-starter"
      >https://github.com/TencentCloudBase/cloudbase-templates/tree/master/egg-starter</a
    >
    <h2>开发部署工具: CloudBase Framework<a href="https://github.com/TencentCloudBase/cloudbase-framework"><img alt="CloudBase Framework"src="https://img.shields.io/github/stars/TencentCloudBase/cloudbase-framework?style=social"/></a></h2>
    <a
      href="https://github.com/TencentCloudBase/cloudbase-framework"
      title="CloudBase Framework: 云开发前后端一体化部署工具"
      ><img width="420" src="https://main.qcloudimg.com/raw/615038b16047fa677646011fae909102.png"
    /></a>
  </body>
</html>
`;
  }

  async api() {
    const { ctx } = this;
    ctx.body = { foo: 'bar' };
  }
}

module.exports = HomeController;
