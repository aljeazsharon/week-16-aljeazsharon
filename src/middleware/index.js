"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helmet_middleware_1 = require("./helmet-middleware");
var morgan_middleware_1 = require("./morgan-middleware");
var xrequestid_middleware_1 = require("./xrequestid-middleware");
var transferMiddleware = function (app) {
    (0, helmet_middleware_1.default)(app);
    (0, morgan_middleware_1.default)(app);
    app.use(xrequestid_middleware_1.default);
};
exports.default = transferMiddleware;
