const humps = require('humps');

const transformCamelizeKeys = (obj) => humps.camelizeKeys(obj);

module.exports = {
  transformCamelizeKeys: transformCamelizeKeys,
};
