"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$getStatistics = exports.$getCountries = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const http_service_1 = require("../services/http.service");
const host = 'covid-193.p.rapidapi.com';
const url = `https://${host}`;
const option = {
    headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host': host,
        'x-rapidapi-key': '65bb882af8msh78eb85b5f8ffeefp1821cdjsn66610ff72d14',
        useQueryString: true,
    },
};
exports.$getCountries = () => rxjs_1.from(http_service_1.httpService.get(`${url}/countries`, option));
exports.$getStatistics = () => rxjs_1.from(http_service_1.httpService.get(`${url}/statistics`, option)).pipe(operators_1.map(value => value.data.response));
