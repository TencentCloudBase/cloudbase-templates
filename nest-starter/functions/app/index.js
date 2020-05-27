"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const platform_express_1 = require("@nestjs/platform-express");
const awsServerlessExpress = require("aws-serverless-express");
const express = require("express");
let cachedServer;
const bootstrapServer = async () => {
    const expressApp = express();
    const adapter = new platform_express_1.ExpressAdapter(expressApp);
    const app = await core_1.NestFactory.create(app_module_1.AppModule, adapter);
    app.enableCors();
    await app.init();
    return awsServerlessExpress.createServer(expressApp);
};
exports.main = async (event, context) => {
    if (!cachedServer) {
        const server = await bootstrapServer();
        cachedServer = server;
        return awsServerlessExpress.proxy(server, event, context, 'PROMISE')
            .promise;
    }
    else {
        return awsServerlessExpress.proxy(cachedServer, event, context, 'PROMISE')
            .promise;
    }
};
//# sourceMappingURL=index.js.map