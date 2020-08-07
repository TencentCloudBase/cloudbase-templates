# Deno 应用示例

这个目录是基于云开发的一个 [Deno](https://deno.land/) 应用示例，可以基于 **[CloudBase Framework](https://github.com/TencentCloudBase/cloudbase-framework)** 框架将项目一键部署到云开发环境

## 部署一个 Deno 应用

### 步骤一. 准备工作

具体步骤请参照 [准备云开发环境和 CloudBase CLI 命令工具](https://github.com/TencentCloudBase/cloudbase-framework/blob/master/CLI_GUIDE.md)

### 步骤二. 初始化应用示例

在命令行执行

```bash
cloudbase init --template deno
```

### 步骤三. 一键部署

进入到项目目录，在命令行执行

```bash
cloudbase framework:deploy
```

## 开发命令及配置

### 本地开发

```bash
deno run entry.ts
```

### CloudBase Framework 相关开发配置

查看 [CloudBase Framework 配置](https://github.com/TencentCloudBase/cloudbase-framework).

### Deno API 文档

查看 [manual](https://deno.land/manual).
