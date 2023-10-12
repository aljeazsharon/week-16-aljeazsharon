"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helmet_1 = require("helmet");
var helmetMiddleware = function (app) {
    app.use((0, helmet_1.default)());
    app.use(helmet_1.default.frameguard({ action: 'deny' }));
};
exports.default = helmetMiddleware;
