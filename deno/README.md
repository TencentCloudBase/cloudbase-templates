<a href="https://github.com/TencentCloudBase/cloudbase-templates"><img src="https://main.qcloudimg.com/raw/408157ecaba08c2594dc953b4c690aec.jpg"></a>

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

### 配置启动环境

服务使用 [denon](https://github.com/denosaurs/denon) 管理进程

配置 denon.yml 参见 [denon yml 配置说明](https://github.com/denosaurs/denon#yaml-configuration-denonyml-template)

### 本地开发

```bash
deno install --allow-read --allow-run --allow-write --allow-net -f -q --unstable https://deno.land/x/denon@2.3.2/denon.ts
PORT=3000 denon start
```

### CloudBase Framework 相关开发配置

查看 [CloudBase Framework 配置](https://github.com/TencentCloudBase/cloudbase-framework).

### Deno API 文档

查看 [manual](https://deno.land/manual).
