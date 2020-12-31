"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const daruk_1 = require("daruk");
async function getApp() {
    const darukApp = daruk_1.DarukServer();
    let Index = class Index {
        async index(ctx) {
            ctx.body = 'hello daruk';
        }
    };
    __decorate([
        daruk_1.get('/'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Index.prototype, "index", null);
    Index = __decorate([
        daruk_1.controller()
    ], Index);
    await darukApp.binding();
    return darukApp;
}
exports.default = getApp;
//# sourceMappingURL=app.js.map