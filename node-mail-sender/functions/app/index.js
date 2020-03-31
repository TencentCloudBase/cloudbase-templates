"use strict";

const nodemailer = require("nodemailer");

exports.main = async (event, context) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.XXXXXX.com", // SMTP 发送服务器
        port: 465, // SMTP 端口
        secureConnection: true, // 使用 SSL
        auth: {
            // 用来发送的邮箱
            user: "xxxxx@example.com",
            // SMTP 授权码，不是邮箱密码
            pass: "********"
        }
    });

    let mailOptions = {
        from: '"发送邮箱" <xxxxx@example.com>', //同上，用于发送的邮箱
        to: event.mail, // 调用时传值，用于接受的邮箱
        subject: "我是主题", 
        html: "<h1>我是内容</h1>"
    };

    let result = await transporter.sendMail(mailOptions);
    console.log(result);
    console.log(event);

    if (result.response == "250 Ok: queued as ") {
        return {
            msg: "邮件发送成功"
        };
    } else {
        return {
            msg: "邮件发送失败"
        };
    }
};
