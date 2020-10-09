<a href="https://github.com/TencentCloudBase/cloudbase-templates"><img src="https://main.qcloudimg.com/raw/2d1c438165480b9a7937e3b81c4873e3.jpg"></a>

# Aqueduct 云托管示例

这个目录是基于云开发的一个 [Aqueduct](https://aqueduct.io/) (Dart Server) 云托管示例，包含 Aqueduct 模板，可以基于 **[CloudBase Framework](https://github.com/TencentCloudBase/cloudbase-framework)** 框架将项目一键部署到云开发环境

## 线上演示地址

[https://framework.service.tcloudbase.com/dartapp/](https://framework.service.tcloudbase.com/dartapp/)

点击下方按钮使用 [CloudBase Framework](https://github.com/TencentCloudBase/cloudbase-framework) 可以在云端一键部署本项目到自己的云开发账号上。

[![](https://main.qcloudimg.com/raw/67f5a389f1ac6f3b4d04c7256438e44f.svg)](https://console.cloud.tencent.com/tcb/env/index?action=CreateAndDeployCloudBaseProject&tdl_anchor=gitee&tdl_site=0&appUrl=https%3A%2F%2Fgitee.com%2FTencentCloudBase%2Fcloudbase-templates&workDir=dart&appName=dart)

## 部署一个 Aqueduct 云托管应用

### 步骤一. 准备工作

具体步骤请参照 [准备云开发环境和 CloudBase CLI 命令工具](https://gitee.com/TencentCloudBase/cloudbase-framework/blob/gitee/CLI_GUIDE.md)

### 步骤二. 初始化应用示例

在命令行执行

```
cloudbase init --template dart
```

### 步骤三. 一键部署

进入到项目目录，在命令行执行

```
cloudbase framework:deploy
```

## 开发命令及配置

### 本地开发

```
brew install dart

pub global activate aqueduct

aqueduct serve
```

### 本地测试

```
pub run test
```

### CloudBase Framework 相关开发配置

查看 [CloudBase Framework 配置](https://github.com/TencentCloudBase/cloudbase-framework).

### Aqueduct 开发文档

查看 [starter](https://aqueduct.io/docs/)

## 使用云数据库

模板里已经集成了云数据库，通过下列步骤便可快速开始。

### 步骤一. 注入环境信息和密钥

在 **channel.dart** 的 `prepare()` 函数里，填入云数据库需要的信息

```dart
/// 初始化云数据库
database = CloudBaseDatabase(CloudBaseCore.init({
  /// 云开发环境 ID
  'env': 'your-env-id',
  /// 腾讯云 API 固定密钥对
  /// 获取路径: https://console.cloud.tencent.com/cam/capi
  'secretId': 'your-secretId',
  /// 同上
  'secretKey': 'your-secretKey'
}));
```

### 步骤二. 请求数据

部署服务后，访问子路径 **/user**，结果返回 **user** 集合的数量。
