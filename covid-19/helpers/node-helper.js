"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = exports.basePath = exports.baseBuildPath = void 0;
const path_1 = __importDefault(require("path"));
exports.baseBuildPath = path_1.default.join(__dirname, '../build');
exports.basePath = path_1.default.join(__dirname, '../');
exports.port = process.env.PORT || 5000;
