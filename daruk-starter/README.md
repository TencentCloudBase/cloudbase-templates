<a href="https://github.com/TencentCloudBase/cloudbase-templates"><img src="https://main.qcloudimg.com/raw/5a262026a0daf33f6e6b934b50d73d20.jpg"></a>

# Daruk 应用示例

这个目录是基于云开发的一个 [Daruk](https://github.com/darukjs/daruk) 应用示例，可以基于 **[CloudBase Framework](https://github.com/TencentCloudBase/cloudbase-framework)** 框架将项目一键部署到云开发环境

## 线上演示地址

[https://framework.service.tcloudbase.com/daruk-starter/](https://framework.service.tcloudbase.com/daruk-starter/)

点击下方按钮使用 [CloudBase Framework](https://github.com/TencentCloudBase/cloudbase-framework) 可以在云端一键部署本项目到自己的云开发账号上。

[![](https://main.qcloudimg.com/raw/67f5a389f1ac6f3b4d04c7256438e44f.svg)](https://console.cloud.tencent.com/tcb/env/index?action=CreateAndDeployCloudBaseProject&tdl_anchor=github&tdl_site=0&appUrl=https%3A%2F%2Fgithub.com%2FTencentCloudBase%2Fcloudbase-templates&workDir=daruk-starter&appName=daruk-starter)

## 部署一个 Daruk 应用

### 步骤一. 准备工作

具体步骤请参照 [准备云开发环境和 CloudBase CLI 命令工具](https://github.com/TencentCloudBase/cloudbase-framework/blob/master/CLI_GUIDE.md)

### 步骤二. 初始化应用示例

在命令行执行

```bash
cloudbase init --template daruk-starter
```

### 步骤三. 一键部署

进入到项目目录，在命令行执行

```bash
cloudbase framework deploy
```

## 本地开发

### 配置开发环境

安装 node_modules

```bash
npm i
```

### 启动调试环境

```bash
npm run dev
```

### 构建部署文件

```bash
npm run build
```

### 部署代码

```bash
npm run deploy
```

### CloudBase Framework 相关开发配置

查看 [CloudBase Framework 配置](https://github.com/TencentCloudBase/cloudbase-framework).

### Daruk API 文档

查看 [darukjs 教程](https://darukjs.com/).
