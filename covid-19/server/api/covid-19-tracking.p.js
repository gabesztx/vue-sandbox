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

const getData = () => http.get(url, option);

module.exports = {
  getData: getData,
};
