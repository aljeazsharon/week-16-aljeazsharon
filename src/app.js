"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
require("dotenv/config");
var main_routes_1 = require("./routes/main-routes");
var db_connect_1 = require("./config/db-connect");
var middleware_1 = require("./middleware");
var app = (0, express_1.default)();
var port = process.env.PORT || 3000;
app.use(express_1.default.json());
(0, middleware_1.default)(app);
app.use(main_routes_1.default);
db_connect_1.db.on('error', console.error.bind(console, 'connection error: '));
db_connect_1.db.once('open', function () {
    console.log('Connect to Database');
});
app.listen(port, function () {
    console.log("Server is Running at http://localhost:".concat(port));
});
