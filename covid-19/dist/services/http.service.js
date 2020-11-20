"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpService = exports.HttpService = void 0;
const axios_1 = __importDefault(require("axios"));
class HttpService {
    get(url, option) {
        return axios_1.default.get(url, option);
    }
}
exports.HttpService = HttpService;
exports.httpService = new HttpService();
