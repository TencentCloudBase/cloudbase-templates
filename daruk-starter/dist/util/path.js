"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cwd = exports.resolve = void 0;
const path_1 = __importDefault(require("path"));
const root = path_1.default.resolve(__dirname, '../../');
function resolve(dir) {
    return path_1.default.join(root, dir);
}
exports.resolve = resolve;
function cwd(dir) {
    return path_1.default.join(process.env.cwd, dir);
}
exports.cwd = cwd;
//# sourceMappingURL=path.js.map