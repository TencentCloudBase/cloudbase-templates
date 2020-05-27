## 安装

```bash
$ npm install
```

## 本地启动

```bash
# 开发模式
$ npm run start

# watch模式
$ npm run start:dev

# 生产模式
$ npm run start:prod
```

## 测试

```bash
# 单元测试
$ npm run test

# e2e测试
$ npm run test:e2e

# 测试覆盖率
$ npm run test:cov
```

## 配合云开发(CloudBase)

**本地调试**：

使用 Nest 提供的命令即可。例如: `npm run start`

**打包**：

运行 `npm run build` 产出可以运行与服务器的代码。

运行 `npm run build:cloudbase` 产出可以托管于云开发(CloudBase)的代码。

**部署到云开发**：

部署到云开发的文件存放于 `functions/app/` 目录下。

请根据需求修改 `cloudbaserc.js` 下的字段信息。

使用 CloudBase CLI 部署到云开发：`cloudbase functions:deploy app`

使用 CloudBase CLI 创建 Http Service，例如：`cloudbase service:create -p /app -f app`。你可以通过访问 自定义域名 + `/app` 的形式访问 Nest 服务。

**全局修改**：

需要修改 `index.ts` 才能使得全局配置在云开发环境中生效。