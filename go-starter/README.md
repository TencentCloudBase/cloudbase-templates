<a href="https://github.com/TencentCloudBase/cloudbase-templates"><img src="https://main.qcloudimg.com/raw/10dd8964ac25c3f40dc229a00664d914.jpg"></a>

# Go 云函数示例

这个目录是基于云开发的一个 [Go]](https://golang.org/) 应用示例，包含 Go 语言 云函数，可以基于 **[CloudBase Framework](https://github.com/TencentCloudBase/cloudbase-framework)** 框架将项目一键部署到云开发环境

## 线上演示地址

[https://framework.service.tcloudbase.com/egg-starter/](https://framework.service.tcloudbase.com/egg-starter/)

点击下方按钮使用 [CloudBase Framework](https://github.com/TencentCloudBase/cloudbase-framework) 可以在云端一键部署本项目到自己的云开发账号上。

[![](https://main.qcloudimg.com/raw/67f5a389f1ac6f3b4d04c7256438e44f.svg)](https://console.cloud.tencent.com/tcb/env/index?action=CreateAndDeployCloudBaseProject&tdl_anchor=gitee&tdl_site=0&appUrl=https%3A%2F%2Fgitee.com%2FTencentCloudBase%2Fcloudbase-templates&workDir=go-starter&appName=go-starter)

## 部署一个 Go 云函数应用

### 步骤一. 准备工作

具体步骤请参照 [准备云开发环境和 CloudBase CLI 命令工具](https://gitee.com/TencentCloudBase/cloudbase-framework/blob/gitee/CLI_GUIDE.md)

### 步骤二. 初始化应用示例

在命令行执行

```
cloudbase init --template go-starter
```

### 步骤三. 一键部署

进入到项目目录，在命令行执行

```
cloudbase framework:deploy
```

修改 main.go 代码之后，需要执行 `make build` 来生成二进制文件

## 开发命令及配置

### 本地开发

修改 main.go 代码之后，需要执行 `make build` 来生成二进制文件

```
make build
```

### 上线部署

```
cloudbase framework:deploy
```

### CloudBase Framework 相关开发配置

查看 [CloudBase Framework 配置](https://github.com/TencentCloudBase/cloudbase-framework).

### 开发文档

- [Go lang 官方文档](https://golang.org/).
- [Go 云函数开发文档](https://cloud.tencent.com/document/product/583/18032)
