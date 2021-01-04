"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const daruk_1 = require("daruk");
const path_1 = require("./util/path");
async function getApp() {
    const darukApp = daruk_1.DarukServer({
        rootPath: path_1.resolve('.'),
        middlewareOrder: [
            'error',
            'koa-ejs'
        ],
    });
    await darukApp.loadFile('src/middleware');
    await darukApp.loadFile('src/controller');
    await darukApp.binding();
    return darukApp;
}
exports.default = getApp;
//# sourceMappingURL=app.js.map