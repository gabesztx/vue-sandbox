const humps = require('humps');
const http = require('axios');

const get = (url, option) => http.get(url, option);
const transformCaseObjectKeys = (obj) => humps.camelizeKeys(obj);

module.exports = {
  get: get,
  transformCaseObjectKeys: transformCaseObjectKeys,
};
