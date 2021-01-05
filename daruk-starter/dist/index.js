"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
(async () => {
    const app = await app_1.default();
    const port = 3000;
    console.log(`server start at http://127.0.0.1:${port}`);
    app.listen(port);
})();
//# sourceMappingURL=index.js.map