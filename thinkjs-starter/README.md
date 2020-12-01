# ThinkJS 应用示例

这个目录是基于云开发的一个 [ThinkJS](https://thinkjs.org/) 应用示例，包含 ThinkJS + 云函数，可以基于 **[CloudBase Framework](https://github.com/TencentCloudBase/cloudbase-framework)** 框架将项目一键部署到云开发环境

## 线上演示地址

[https://framework.service.tcloudbase.com/thinkjs-starter/](https://framework.service.tcloudbase.com/thinkjs-starter/)

点击下方按钮使用 [CloudBase Framework](https://github.com/TencentCloudBase/cloudbase-framework) 可以在云端一键部署本项目到自己的云开发账号上。

[![](https://main.qcloudimg.com/raw/67f5a389f1ac6f3b4d04c7256438e44f.svg)](https://console.cloud.tencent.com/tcb/env/index?action=CreateAndDeployCloudBaseProject&tdl_anchor=github&tdl_site=0&appUrl=https%3A%2F%2Fgithub.com%2FTencentCloudBase%2Fcloudbase-templates&workDir=thinkjs-starter&appName=thinkjs-starter)

## 部署一个 ThinkJS 应用

### 步骤一. 准备工作

具体步骤请参照 [准备云开发环境和 CloudBase CLI 命令工具](https://github.com/TencentCloudBase/cloudbase-framework/blob/master/CLI_GUIDE.md)

### 步骤二. 初始化应用示例

在命令行执行

```
cloudbase init --template thinkjs-starter
```

### 步骤三. 一键部署

进入到项目目录，在命令行执行

```
cloudbase framework deploy
```

## 开发命令及配置

### 本地开发

```
npm start
```

### 上线部署

```
npm run deploy
```

### CloudBase Framework 相关开发配置

查看 [CloudBase Framework 配置](https://github.com/TencentCloudBase/cloudbase-framework).

### ThinkJS 开发文档

查看 [官方文档](https://thinkjs.org/doc/index.html).