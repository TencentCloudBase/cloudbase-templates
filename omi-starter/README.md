<a href="https://github.com/TencentCloudBase/cloudbase-templates"><img src="https://user-images.githubusercontent.com/11473889/88882843-4f2b7780-d265-11ea-8fcf-49cb297240c7.png"></a>

# Omi 应用示例

这个目录是基于云开发的一个 [Omi](https://tencent.github.io/omi/) 应用示例，包含 Omi + 云函数 + 静态网站部署，可以基于 **[CloudBase Framework](https://github.com/TencentCloudBase/cloudbase-framework)** 框架将项目一键部署到云开发环境

## 线上演示地址

[https://framework.service.tcloudbase.com/omi-starter/](https://framework.service.tcloudbase.com/omi-starter/)

点击下方按钮使用 [CloudBase Framework](https://github.com/TencentCloudBase/cloudbase-framework) 可以在云端一键部署本项目到自己的云开发账号上。

[![](https://main.qcloudimg.com/raw/67f5a389f1ac6f3b4d04c7256438e44f.svg)](https://console.cloud.tencent.com/tcb/env/index?action=CreateAndDeployCloudBaseProject&tdl_anchor=gitee&tdl_site=0&appUrl=https%3A%2F%2Fgitee.com%2FTencentCloudBase%2Fcloudbase-templates&workDir=omi-starter&appName=omi-starter)

## 部署一个 Omi 应用

### 步骤一. 准备工作

具体步骤请参照 [准备云开发环境和 CloudBase CLI 命令工具](https://gitee.com/TencentCloudBase/cloudbase-framework/blob/gitee/CLI_GUIDE.md)

### 步骤二. 初始化应用示例

在命令行执行

```
cloudbase init --template omi-starter
```

### 步骤三. 一键部署

进入到项目目录，在命令行执行

```
npm run deploy
```

## 开发命令及配置

### 本地开发

```
npm run start
```

### 上线部署

```
npm run deploy
```

### Lint

```
npm run fix
```

### CloudBase Framework 相关开发配置

查看 [CloudBase Framework 配置](https://github.com/TencentCloudBase/cloudbase-framework).

### Omi 开发文档

查看 [docs](https://tencent.github.io/omi/site/docs/index.html) 和 [github](https://github.com/Tencent/omi).
