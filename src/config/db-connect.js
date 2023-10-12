"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
var db_config_1 = require("./db-config");
var mongoose_1 = require("mongoose");
mongoose_1.default.connect("mongodb+srv://".concat(db_config_1.default.username, ":").concat(db_config_1.default.password, "@").concat(db_config_1.default.cluster, ".mongodb.net/").concat(db_config_1.default.dbname, "?retryWrites=true&w=majority"), {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
exports.db = mongoose_1.default.connection;
