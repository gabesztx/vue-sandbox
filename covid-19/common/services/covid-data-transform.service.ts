import { isoCountriesSchema } from '../../helpers/iso-countries_schema';
import { isoCountries } from '../../helpers/iso-countries';

export const transformNoData = (data: any): any => {
  data.forEach((item: any) => {
    Object.keys(item).forEach((key) => {
      item[key] = !item[key].length || item[key] === 'N/A' ? '-' : item[key];
    });
  });
  return data;
};

export const transformRemoveComma = (data: any) => {
  data.forEach((item: any) => {
    Object.keys(item).forEach((key) => {
      if (item[key].search(',') > 0) {
        item[key] = item[key].replace(/,/g, '');
      }
    });
  });
  return data;
};

export const transformRemoveAdds = (data: any) => {
  data.forEach((item: any) => {
    if (item.hasOwnProperty('cases') && item.cases.new && item.cases.new[0] === '+') {
      item.cases.new = item.cases.new.substring(1);
    }
    if (item.hasOwnProperty('deaths') && item.deaths.new && item.deaths.new[0] === '+') {
      item.deaths.new = item.deaths.new.substring(1);
    }
  });
  return data;
};

export const transformRemoveHyphen = (data: any) => {
  data.forEach((item: any) => {
    if (item.country && item.country.search('-') > 0) {
      item.country = item.country.replace(/-/g, ' ');
    }
    if (item.continent && item.continent.search('-') > 0) {
      item.continent = item.continent.replace(/-/g, ' ');
    }
  });
  return data;
};

export const getCountryCode = (data: any) => {
  data.forEach((item: any) => {
    const countryItem = item.country;
    Object.keys(isoCountriesSchema).forEach((code) => {
      if (countryItem === isoCountriesSchema[code]) {
        item.countryCode = code.toLowerCase();
      }
    });
  });
  return data;
};

export const getCountryName = (data: any) => {
  data.forEach((item: any) => {
    const countryCode = item.countryCode ? item.countryCode.toUpperCase() : null;
    if (isoCountries.hasOwnProperty(countryCode)) {
      item.country = isoCountries[countryCode];
    }
  });
  return data;
};


export const separateContinentData = (data: any) => {
  let continentData = [] as any;
  let countryData = [] as any;
  data.forEach((item: any) => {
    if (item.country === item.continent) {
      continentData.push(item);
    } else {
      countryData.push(item);
    }
  });
  return [countryData, continentData];
};

export const transformMergeObject = (items: any) => {
  let data = items;
  data.forEach((item: any) => {
    const population = item.population;
    item.population = population === null ? 'N/A' : population;
    Object.keys(item).forEach((key) => {
      const obj = item[key];
      if (item[key] instanceof Object) {
        Object.keys(obj).forEach((prop) => {
          item[`${key}_${prop}`] = obj[prop] === null ? 'N/A' : Number(obj[prop]);
        });
        delete item[key];
      }
    });
  });

  return data;
};

export const deleteNoCountryData = (items: any) => {
  const noCountryData = ['Channel Islands', 'Diamond Princess', 'MS Zaandam', 'Caribbean Netherlands', 'MS Zaandam ', 'Diamond Princess '];
  let countryData = [] as any;
  items.forEach((item) => {
    const country = item.country;
    const isFind = noCountryData.find((item) => country === item);
    if (!isFind) {
      countryData.push(item);
    }
  });
  return countryData;
};
