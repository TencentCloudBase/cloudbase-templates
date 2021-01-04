"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_ejs_1 = __importDefault(require("koa-ejs"));
const path_1 = require("../util/path");
const daruk_1 = require("daruk");
let KoaEjs = class KoaEjs {
    initMiddleware(daruk) {
        return async (ctx, next) => {
            koa_ejs_1.default(daruk.app, {
                root: path_1.resolve('view'),
                viewExt: 'ejs',
                layout: false,
            });
            await next();
        };
    }
};
KoaEjs = __decorate([
    daruk_1.defineMiddleware('koa-ejs')
], KoaEjs);
exports.default = KoaEjs;
//# sourceMappingURL=ejs.js.map