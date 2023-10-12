"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
;
var xRequestId = function (req, res, next) {
    if (req.headers["x-request-id"]) {
        res.setHeader("x-request-id", req.headers["x-request-id"]);
        req.request_id = req.headers["x-request-id"];
    }
    else {
        var uuid = (0, uuid_1.v4)();
        res.setHeader("x-request-id", uuid);
        req.request_id = uuid;
    }
    next();
};
exports.default = xRequestId;
