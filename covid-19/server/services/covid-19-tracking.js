const http = require('./http.service');
const host = 'covid-19-tracking.p.rapidapi.com';
const url = `https://${host}/v1`;
const option = {
  headers: {
    'x-rapidapi-host': host,
    'x-rapidapi-key': '65bb882af8msh78eb85b5f8ffeefp1821cdjsn66610ff72d14',
    useQueryString: true,
  },
};

export const getAllData = () => {
  http.get(url, option).then((response) => {
    console.log('covid-19-tracking', response.data);
  });
};

// module.exports = {
//   getAllTrackingData: getAllTrackingData,
//   transformCaseObjectKeys: transformCaseObjectKeys,
// };
