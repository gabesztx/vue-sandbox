const http = require('axios');
const host = 'covid-19-global-tracker-with-regional-data.p.rapidapi.com';
const option = {
  headers: {
    'x-rapidapi-host': host,
    'x-rapidapi-key': '65bb882af8msh78eb85b5f8ffeefp1821cdjsn66610ff72d14',
    'x-authorization': '6179002e-6646-4852-be37-572758a58cbb',
    useQueryString: true,
  },
};

const getData = () => {
  const url = `https://${host}/api/covid/globalData`;
  return http.get(url, option);
};

module.exports = {
  getData: getData,
};
