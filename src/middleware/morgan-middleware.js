"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var morgan_1 = require("morgan");
var fs_1 = require("fs");
var morganMiddleware = function (app) {
    app.use((0, morgan_1.default)('combined', { stream: fs_1.default.createWriteStream('/logging.log', { flags: 'a' }) }));
    app.use((0, morgan_1.default)('dev'));
};
exports.default = morganMiddleware;
