const { Consumer } = require("@tencent/polaris")
var async = require("asyncawait/async");
var await = require("asyncawait/await");
const express = require('express');
const { result } = require("asyncawait/async");
const app = express();
const consumer = new Consumer();

/*
 *  使用服务名称调用北极星寻址
 *  namespace: Production-生产环境 Development-开发环境 
 *  service: trpc协议名称 或者 服务l5地址
 */
async function getname(namespace, service) {
    let starttick = new Date().getMilliseconds();
    const response = await( consumer.select(namespace, service) );
    let endtick = new Date().getMilliseconds();
    console.log('name service request time ' + (endtick - starttick));
    if (response) {
        const { instance: { host, port }} = response;
        return {"ip": host, "port": port};
    } else {
        return {"ip": "", "port": ""};
    }
}

app.get('/', (req, res) => {
    console.log('Name Service received a request.');
    const namespace = req.query["namespace"];
    const service = req.query["service"];

    if (namespace.length > 0 && service.length > 0) {
        getname(namespace, service).then((result) => {
            res.send( JSON.stringify(result) );
        })
    }
});

const port = process.env.PORT || 80;
app.listen(port, () => {
    console.log('Name Service listening on port', port);
});
