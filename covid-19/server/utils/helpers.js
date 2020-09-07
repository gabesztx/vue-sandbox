const humps = require('humps');

const transformCaseObjectKeys = (obj) => humps.camelizeKeys(obj);

module.exports = {
  transformCaseObjectKeys: transformCaseObjectKeys,
};
