const { from } = require('rxjs');
const { map } = require('rxjs/operators');
const { transformObjectKeys } = require('../utils/helpers');
const http = require('../services/http.service');
const host = 'api.covid19api.com/summary';
const url = `https://${host}`;
const option = {};

const $getApi = () => from(http.get(url, option)).pipe(
  map(value => transformObjectKeys(value.data)));

module.exports = {
  $getApi: $getApi,
};


// 'https://api.covid19api.com/live/country/south-africa/status/confirmed'

/*const $getSummery = () => from(http.get(url, option)).pipe(
  map(value => value.data['Countries']),
  // map(value => transformObjectKeys(value.data))
);


const $getCountryStatus = () => from(http.get(url1, option)).pipe(
  map(value => {
    return value.data[value.data.length - 1];
  }),
);*/
