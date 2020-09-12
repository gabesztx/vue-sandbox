const humps = require('humps');

const transformObjectKeys = (obj) => humps.camelizeKeys(obj);

module.exports = {
  transformObjectKeys: transformObjectKeys,
};
