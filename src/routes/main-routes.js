"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var routes = express_1.default.Router();
var transfer_routes_1 = require("./transfer-routes");
routes.get('/', function (req, res) {
    res.status(200).json({
        success: true,
        message: 'Assignment Week 15 - Hello!'
    });
});
routes.use('/', transfer_routes_1.default);
exports.default = routes;
