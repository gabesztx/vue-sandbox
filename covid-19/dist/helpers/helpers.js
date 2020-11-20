"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformCamelizeKeys = void 0;
const humps = require('humps');
exports.transformCamelizeKeys = (obj) => humps.camelizeKeys(obj);
