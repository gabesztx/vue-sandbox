"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsFileService = exports.JsonfileService = void 0;
const jsonfile_1 = require("jsonfile");
class JsonfileService {
    readJsonFile(file) {
        return jsonfile_1.readFile(file);
    }
    writeJsonFile(file, obj) {
        return jsonfile_1.writeFile(file, obj);
    }
}
exports.JsonfileService = JsonfileService;
exports.jsFileService = new JsonfileService();
