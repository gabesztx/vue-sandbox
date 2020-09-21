const path = require('path');
const isoCountries = require('../utils/iso-countries');
// const countries = require('i18n-iso-countries');

const transformNoData = (data) => {
  data.forEach((item) => {
    Object.keys(item).forEach((key) => {
      item[key] = !item[key].length || item[key] === 'N/A' ? '-' : item[key];
    });
  });
  return data;
};
const transformRemoveComma = (data) => {
  data.forEach((item) => {
    Object.keys(item).forEach((key) => {
      if (item[key].search(',') > 0) {
        item[key] = item[key].replace(/,/g, '');
      }
    });
  });
  return data;
};

// console.log('countries', );
const transformCountryCode = (data) => {
  data.forEach((item) => {
    const countryItem = item.countryText;
    Object.keys(isoCountries).forEach((code) => {
      if (countryItem === isoCountries[code]) {
        const flag = 'http://localhost:5000/static/flags/' + code.toLocaleLowerCase() + '.svg';
        item.countryCode = flag;
      }
    });
    if (!item.countryCode) {
      // console.log('item', item);
    }
  });
  return data;
};

module.exports = {
  transformCountryCode: transformCountryCode,
  transformNoData: transformNoData,
  transformRemoveComma: transformRemoveComma,
};
