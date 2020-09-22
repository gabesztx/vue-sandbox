const path = require('path');
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

const transformCountryCode = (data) => {
  data.forEach((item) => {
    const countryItem = item.country;
    Object.keys(isoCountries).forEach((code) => {
      if (countryItem === isoCountries[code]) {
        // const flag = `http://localhost:5000/static/flags/${code.toLocaleLowerCase()}.svg`;
        const flag = code.toLocaleLowerCase();
        item.countryCode = flag;
      }
    });
  });
  return data;
};

const separateContinentData = (data) => {
  let continentData = [];
  let countryData = [];
  data.forEach(item => {
    if (item.country === item.continent) {
      continentData.push(item);
    } else {
      countryData.push(item);
    }
  });
  return [countryData, continentData];
};

module.exports = {
  transformCountryCode: transformCountryCode,
  transformNoData: transformNoData,
  transformRemoveComma: transformRemoveComma,
  transformRemoveHyphen: transformRemoveHyphen,
  transformRemoveAdds: transformRemoveAdds,
  separateContinentData: separateContinentData,
};
