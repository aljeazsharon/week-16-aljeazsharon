"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transferList = void 0;
var mongoose_1 = require("mongoose");
var transferSchema = new mongoose_1.default.Schema({
    transfer: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "In Progress",
        enum: ['In Progress', 'Approved']
    },
    isDeleted: {
        type: Boolean
    }
}, {
    timestamps: {
        currentTime: function () { return new Date().setUTCHours(0, 0, 0, 0); }
    },
    versionKey: false
});
exports.transferList = mongoose_1.default.model("transfer", transferSchema);
