# CloudBase Node Mail Sender

云开发 Node Mail Sender 示例

简单邮件发送

## 使用方法

### 确认cli环境正常

tcb已登录，目录在一个env之中

### 安装依赖

发送邮件的功能使用了[nodemailer](https://github.com/nodemailer/nodemailer)

在`app`目录下执行：

```
npm install nodemailer --save
```

### 补充所需参数（位置在源码中均有注释）

在[index.js](./functions/app/index.js)中补充：

- SMTP 发送服务器
- 用于发送的邮箱
- SMTP 授权码

在[cloudbaserc.js](./cloudbaserc.js)中补充：

- mail参数，接受的邮箱（本地invoke调试用）

### 测试

执行以下命令：

```
tcb functions:deploy app
```

```
tcb functions:invoke app
```

配置无误即可收到测试邮件。
