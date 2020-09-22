const { from } = require('rxjs');
const { map } = require('rxjs/operators');
const http = require('../services/http.service');
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
const $getCountries = () => {
  return from(http.get(`${url}/countries`, option));
};
const $getStatistics = () => {
  return from(http.get(`${url}/statistics`, option)).pipe(
    map(value => value.data.response)
  );
};

module.exports = {
  $getCountries: $getCountries,
  $getStatistics: $getStatistics,
};
