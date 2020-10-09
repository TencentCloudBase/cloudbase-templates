<a href="https://github.com/TencentCloudBase/cloudbase-templates"><img src="https://main.qcloudimg.com/raw/721bfc09d7e0a2ccd49b40ac6287f8ac.png"></a>

# uni-app 多端全栈应用示例

这个目录是基于云开发的一个 [uni-app](https://uniapp.dcloud.io/) 全栈应用示例，包含 uni-app + 云函数 + 静态网站部署，可以基于 **[CloudBase Framework](https://github.com/TencentCloudBase/cloudbase-framework)** 框架将项目一键部署到云开发环境

## 线上演示地址

[https://framework-1258016615.tcloudbaseapp.com/uni-app/](https://framework-1258016615.tcloudbaseapp.com/uni-app/)

点击下方按钮使用 [CloudBase Framework](https://github.com/TencentCloudBase/cloudbase-framework) 可以在云端一键部署本项目到自己的云开发账号上。

[![](https://main.qcloudimg.com/raw/67f5a389f1ac6f3b4d04c7256438e44f.svg)](https://console.cloud.tencent.com/tcb/env/index?action=CreateAndDeployCloudBaseProject&tdl_anchor=github&tdl_site=0&appUrl=`https%3A%2F%2Fgitee.com%2FTencentCloudBase%2Fcloudbase-templates`&workDir=uni-app-starter&appName=uni-app-starter)

## 部署一个 uni-app 多端全栈应用

### 创建云开发环境

#### 云开发环境说明

这里有个地方需要注意一下，如果要使用小程序云开的能力的话，务必要在小程序开发者工具里面进行创建环境，在腾讯云官网创建的环境暂时还无法和小程序进行绑定。

![](https://main.qcloudimg.com/raw/ee0607b57358a6148aca966810dc88e3.png)

#### 多端共用云环境

如果要 H5 和小程序使用同一个云环境，在小程序云开发创建的环境一定要改成按量付费模式，这样才能开启静态网站托管的服务，才能部署 H5。

![](https://main.qcloudimg.com/raw/beac976f00336d8c315bd6df7ffef9f0.png)

### 步骤一. 准备工作

具体步骤请参照 [准备云开发环境和 CloudBase CLI 命令工具](https://gitee.com/TencentCloudBase/cloudbase-framework/blob/gitee/CLI_GUIDE.md)

### 步骤二. 初始化应用示例

在命令行执行

```bash
cloudbase init --template uni-app-starter
```

### 步骤三. 一键部署

#### H5 部署

进入到项目目录，在命令行执行

```bash
cloudbase framework:deploy
```

#### 小程序部署

在使用 CI 之前，需要先前往 mp 平台下载上传密钥，具体操作方式，可以[点击前往](https://developers.weixin.qq.com/miniprogram/dev/devtools/ci.html)

进入到项目目录，在命令行执行

```bash
// 部署开发版，默认生成二维码
npm run wxci:preview

// 部署体验版，直接上传到mp平台
npm run wxci:upload
```

## 开发命令及配置

### 本地开发

```bash
npm run dev
```

### 上线部署

```bash
npm run deploy
```

### Lint

```bash
npm run lint
```

### CloudBase Framework 相关开发配置

查看 [CloudBase Framework 配置](https://github.com/TencentCloudBase/cloudbase-framework).

### uni-app 相关开发配置

查看 [Configuration Reference](https://uniapp.dcloud.io/collocation/pages).
