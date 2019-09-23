const fs = require('fs');
const path = require('path');

function render(tpl, variables) {
    for (let key in variables) {
        const reg = new RegExp('\\$\\{' + key + '\\}', 'g');
        tpl = tpl.replace(reg, variables[key]);
    }
    return tpl;
}

exports.main_handler = async () => {
    let html = fs.readFileSync(path.resolve(__dirname, './demo.html'), {
        encoding: 'utf-8'
    });

    html = render(html, {
        master: '腾讯云云函数团队', // 您的名称
        centralCouplet: '年年有余', // 横批
        upCouplet: '千年迎新春', // 上联
        downCouplet: '瑞雪兆丰年' // 下联
    });

    return {
        isBase64Encoded: false,
        statusCode: 200,
        headers: { 'Content-Type': 'text/html' },
        body: html
    };
};
