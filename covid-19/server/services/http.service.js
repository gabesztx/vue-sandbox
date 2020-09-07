const http = require('axios');
const get = (url, option) => http.get(url, option);

module.exports = {
  get: get,
};
