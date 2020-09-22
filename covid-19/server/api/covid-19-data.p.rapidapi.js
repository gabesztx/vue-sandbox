const { from } = require('rxjs');
const { map } = require('rxjs/operators');
const http = require('../services/http.service');
const host = 'covid-19-data.p.rapidapi.com/country/code';
const url = `https://${host}`;

const $getLatestCountryDataByCode = (countryCode) => {
  const option = {
    headers: {
      'content-type': 'application/octet-stream',
      'x-rapidapi-host': host,
      'x-rapidapi-key': '65bb882af8msh78eb85b5f8ffeefp1821cdjsn66610ff72d14',
      useQueryString: true,
    },
    params: {
      format: 'json',
      code: countryCode,
    },
  };
  return from(http.get(url, option)).pipe(map((value) => value.data));
};

module.exports = {
  $getLatestCountryDataByCode: $getLatestCountryDataByCode,
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
