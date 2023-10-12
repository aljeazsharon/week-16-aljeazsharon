"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTransferData = exports.updateTransferData = exports.getTransferList = exports.getAllTransferList = exports.createTransferData = void 0;
var schema_1 = require("../config/schema");
var getAllTransferList = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var transfer, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, schema_1.transferList.find({ isDeleted: { $exists: false } })];
            case 1:
                transfer = _a.sent();
                return [2 /*return*/, res.status(200).json({
                        success: true,
                        message: "Success Get All The Transfer List.",
                        data: transfer
                    })];
            case 2:
                error_1 = _a.sent();
                console.log(error_1);
                return [2 /*return*/, res.status(400).json({
                        success: false,
                        message: "Retrieve Data Transfer Failed."
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAllTransferList = getAllTransferList;
var getTransferList = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, transfer, id, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, schema_1.transferList.findById];
            case 1:
                transfer = _a.sent(), id = (void 0).id;
                if (!transfer) {
                    return [2 /*return*/, res.status(404).json({
                            message: "Transfer List is not found."
                        })];
                }
                return [2 /*return*/, res.status(200).json({
                        success: true,
                        message: "Get Transfer List Success!",
                        data: transfer
                    })];
            case 2:
                error_2 = _a.sent();
                console.log(error_2);
                return [2 /*return*/, res.status(400).json({
                        success: false,
                        message: "Error Getting Data!"
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getTransferList = getTransferList;
var createTransferData = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var transfer, newTransferData, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                transfer = req.body.transfer;
                return [4 /*yield*/, schema_1.transferList.create({ transfer: transfer })];
            case 1:
                newTransferData = _a.sent();
                return [2 /*return*/, res.status(200).json({
                        success: true,
                        message: "Create Data Transfer Success!",
                        data: transfer
                    })];
            case 2:
                error_3 = _a.sent();
                console.log(error_3);
                return [2 /*return*/, res.status(500).json({
                        message: error_3
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createTransferData = createTransferData;
var updateTransferData = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, status_1, updateStatusTransfer, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                status_1 = req.body.status;
                console.log(req.body);
                return [4 /*yield*/, schema_1.transferList.updateOne({ _id: id }, { status: status_1 })];
            case 1:
                updateStatusTransfer = _a.sent();
                if (updateStatusTransfer.modifiedCount > 0) {
                    return [2 /*return*/, res.status(200).json({
                            success: true,
                            message: "Data Update Success!",
                            data: {
                                status: status_1
                            }
                        })];
                }
                else {
                    return [2 /*return*/, res.status(404).json({
                            success: false,
                            message: "Data Failed to Update"
                        })];
                }
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                console.log('Update Data Status Error:', error_4);
                return [2 /*return*/, res.status(500).json({
                        success: false,
                        message: "An Error has occurred while updating the data!"
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateTransferData = updateTransferData;
var deleteTransferData = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, deleteTransferData_1, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, schema_1.transferList.findByIdAndUpdate(id, { $set: { isDeleted: true } }, { new: true })];
            case 1:
                deleteTransferData_1 = _a.sent();
                if (deleteTransferData_1) {
                    return [2 /*return*/, res.status(200).json({
                            success: true,
                            message: "Data Transfer Deleted!",
                            data: deleteTransferData_1
                        })];
                }
                else {
                    return [2 /*return*/, res.status(404).json({
                            success: false,
                            message: "Transfer Data is not found!"
                        })];
                }
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                console.log('Deleted Data Errror:', error_5);
                return [2 /*return*/, res.status(500).json({
                        success: false,
                        message: "An Error has occured while deleting data!"
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteTransferData = deleteTransferData;
