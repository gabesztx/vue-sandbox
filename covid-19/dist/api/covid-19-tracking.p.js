"use strict";
const { from } = require('rxjs');
const { map } = require('rxjs/operators');
const { transformObjectKeys } = require('../helpers/helpers');
const http = require('../services/http.service');
const host = 'covid-19-tracking.p.rapidapi.com';
const url = `https://${host}/v1`;
const option = {
    headers: {
        'x-rapidapi-host': host,
        'x-rapidapi-key': '65bb882af8msh78eb85b5f8ffeefp1821cdjsn66610ff72d14',
        useQueryString: true,
    },
};
const $getApi = () => from(http.get(url, option)).pipe(map(value => transformObjectKeys(value.data)));
module.exports = {
    $getApi: $getApi,
};
