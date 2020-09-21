<a href="https://github.com/TencentCloudBase/cloudbase-templates"><img src="https://main.qcloudimg.com/raw/82da2591cd2aed610d7f91f9dd881930.png"></a>

# Node 云托管示例

这个目录是基于云开发的一个 Node.js 的 [Koa](https://koa.bootcss.com/) 云托管示例，包含 Koa + 云托管，可以基于 **[CloudBase Framework](https://github.com/TencentCloudBase/cloudbase-framework)** 框架将项目一键部署到云开发的 云托管环境

## 线上演示地址

[https://framework.service.tcloudbase.com/node-capp/](https://framework.service.tcloudbase.com/node-capp/)

## 部署一个 Node 云托管应用

### 步骤一. 准备工作

具体步骤请参照 [准备云开发环境和 CloudBase CLI 命令工具](https://github.com/TencentCloudBase/cloudbase-framework/blob/master/CLI_GUIDE.md)

### 步骤二. 初始化应用示例

在命令行执行

```
cloudbase init --template node
```

### 步骤三. 一键部署

进入到项目目录，在命令行执行

```
cloudbase framework:deploy
```

## 开发命令及配置

### 本地开发

```
npm run dev
```

### 上线部署

```
npm run deploy
```

### CloudBase Framework 相关开发配置

查看 [CloudBase Framework 配置](https://github.com/TencentCloudBase/cloudbase-framework).

### Koa 开发文档

查看 [starter](https://koa.bootcss.com/#application).
