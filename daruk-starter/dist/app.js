"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const daruk_1 = require("daruk");
async function getApp() {
    const darukApp = daruk_1.DarukServer({
        rootPath: __dirname,
        middlewareOrder: [
            'error',
            'koa-static',
            'koa-ejs'
        ],
    });
    await darukApp.loadFile('middleware');
    await darukApp.loadFile('controller');
    await darukApp.binding();
    return darukApp;
}
exports.default = getApp;
//# sourceMappingURL=app.js.map