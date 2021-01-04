"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const daruk_1 = require("daruk");
let KoaEjs = class KoaEjs {
    initMiddleware(daruk) {
        return async (ctx, next) => {
            var _a;
            try {
                await next();
            }
            catch (err) {
                (_a = ctx.logger) === null || _a === void 0 ? void 0 : _a.error(err);
                ctx.status = 500;
                const pathname = ctx === null || ctx === void 0 ? void 0 : ctx.path;
                if (pathname && pathname.indexOf("/api/") === 0) {
                    ctx.body = {
                        code: -1,
                        msg: err.message,
                        data: err.stack,
                    };
                }
                else {
                    await ctx.render('error', {
                        title: "Error",
                        status: ctx.status,
                        message: err.message,
                        stack: err.stack,
                    });
                }
            }
        };
    }
};
KoaEjs = __decorate([
    daruk_1.defineMiddleware('error')
], KoaEjs);
exports.default = KoaEjs;
//# sourceMappingURL=error.js.map