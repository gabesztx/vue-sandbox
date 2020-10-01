const path = require('path');
const isoCountriesSchema = require('../utils/iso-countries_schema');
const isoCountries = require('../utils/iso-countries');

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
const transformRemoveAdds = (data) => {
  data.forEach((item) => {
    // eslint-disable-next-line no-prototype-builtins
    if (item.hasOwnProperty('cases') && item.cases.new && item.cases.new[0] === '+') {
      item.cases.new = item.cases.new.substring(1);
    }
    // eslint-disable-next-line no-prototype-builtins
    if (item.hasOwnProperty('deaths') && item.deaths.new && item.deaths.new[0] === '+') {
      item.deaths.new = item.deaths.new.substring(1);
    }
  });
  return data;
};

const transformRemoveHyphen = (data) => {
  data.forEach((item) => {
    if (item.country && item.country.search('-') > 0) {
      item.country = item.country.replace(/-/g, ' ');
    }
    if (item.continent && item.continent.search('-') > 0) {
      item.continent = item.continent.replace(/-/g, ' ');
    }
  });
  return data;
};

const getCountryCode = (data) => {
  data.forEach((item) => {
    const countryItem = item.country;
    Object.keys(isoCountriesSchema).forEach((code) => {
      if (countryItem === isoCountriesSchema[code]) {
        // const flag = `http://localhost:5000/static/flags/${code.toLocaleLowerCase()}.svg`;
        // const flag = code.toLocaleLowerCase();
        // item.countryCode = code.toLowerCase();
        item.countryCode = code.toLowerCase();
      }
    });
  });
  return data;
};

const getCountryName = (data) => {
  data.forEach((item) => {
    const countryCode = item.countryCode ? item.countryCode.toUpperCase() : null;
    // eslint-disable-next-line no-prototype-builtins,no-empty
    if (isoCountries.hasOwnProperty(countryCode)) {
      item.country = isoCountries[countryCode];
    }
  });
  return data;
};


const separateContinentData = (data) => {
  let continentData = [];
  let countryData = [];
  data.forEach((item) => {
    if (item.country === item.continent) {
      continentData.push(item);
    } else {
      countryData.push(item);
    }
  });
  return [countryData, continentData];
};

const transformMergeObject = (items) => {
  let data = items;
  data.forEach((item) => {
    const population = item.population;
    item.population = population === null ? 'N/A' : population;
    Object.keys(item).forEach((key) => {
      const obj = item[key];
      if (item[key] instanceof Object) {
        Object.keys(obj).forEach((prop) => {
          // console.log('---', obj[prop]);
          item[`${key}_${prop}`] = obj[prop] === null ? 'N/A' : Number(obj[prop]);
        });
        delete item[key];
      }
    });
  });

  return data;
};
// const countries = require('i18n-iso-countries');
// console.log(countries.alpha3ToAlpha2('USA'));

module.exports = {
  getCountryCode: getCountryCode,
  getCountryName: getCountryName,
  transformNoData: transformNoData,
  transformRemoveComma: transformRemoveComma,
  transformRemoveHyphen: transformRemoveHyphen,
  transformRemoveAdds: transformRemoveAdds,
  transformMergeObject: transformMergeObject,
  separateContinentData: separateContinentData,
};
