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
let Site = class Site {
    async cors(ctx) {
        ctx.body = {
            code: 0,
            message: '',
            data: {
                text: 'CORS supported'
            }
        };
    }
    async info(ctx) {
        ctx.body = {
            code: 0,
            message: '',
            data: {
                text: 'CORS not support'
            }
        };
    }
    async error(ctx) {
        throw new Error('custom error');
    }
};
__decorate([
    daruk_1.get('/api/cors'),
    daruk_1.middleware('cors'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Site.prototype, "cors", null);
__decorate([
    daruk_1.get('/api/info'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Site.prototype, "info", null);
__decorate([
    daruk_1.get('/api/error'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Site.prototype, "error", null);
Site = __decorate([
    daruk_1.controller()
], Site);
exports.default = Site;
//# sourceMappingURL=api.js.map