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
const path_1 = require("../util/path");
let Site = class Site {
    async index(ctx) {
        console.log('process.env:', process.env);
        await ctx.render('home', {
            title: 'home',
            headers: ctx.headers,
            pathname: path_1.requestRoot(),
        });
    }
    async error(ctx) {
        throw new Error('custom error');
    }
};
__decorate([
    daruk_1.get('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Site.prototype, "index", null);
__decorate([
    daruk_1.get('/error'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Site.prototype, "error", null);
Site = __decorate([
    daruk_1.controller()
], Site);
exports.default = Site;
//# sourceMappingURL=site.js.map