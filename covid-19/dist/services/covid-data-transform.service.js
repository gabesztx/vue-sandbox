"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNoCountryData = exports.transformMergeObject = exports.separateContinentData = exports.getCountryName = exports.getCountryCode = exports.transformRemoveHyphen = exports.transformRemoveAdds = exports.transformRemoveComma = exports.transformNoData = void 0;
const iso_countries_schema_1 = require("../helpers/iso-countries_schema");
const iso_countries_1 = require("../helpers/iso-countries");
exports.transformNoData = (data) => {
    data.forEach((item) => {
        Object.keys(item).forEach((key) => {
            item[key] = !item[key].length || item[key] === 'N/A' ? '-' : item[key];
        });
    });
    return data;
};
exports.transformRemoveComma = (data) => {
    data.forEach((item) => {
        Object.keys(item).forEach((key) => {
            if (item[key].search(',') > 0) {
                item[key] = item[key].replace(/,/g, '');
            }
        });
    });
    return data;
};
exports.transformRemoveAdds = (data) => {
    data.forEach((item) => {
        if (item.hasOwnProperty('cases') && item.cases.new && item.cases.new[0] === '+') {
            item.cases.new = item.cases.new.substring(1);
        }
        if (item.hasOwnProperty('deaths') && item.deaths.new && item.deaths.new[0] === '+') {
            item.deaths.new = item.deaths.new.substring(1);
        }
    });
    return data;
};
exports.transformRemoveHyphen = (data) => {
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
exports.getCountryCode = (data) => {
    data.forEach((item) => {
        const countryItem = item.country;
        Object.keys(iso_countries_schema_1.isoCountriesSchema).forEach((code) => {
            if (countryItem === iso_countries_schema_1.isoCountriesSchema[code]) {
                item.countryCode = code.toLowerCase();
            }
        });
    });
    return data;
};
exports.getCountryName = (data) => {
    data.forEach((item) => {
        const countryCode = item.countryCode ? item.countryCode.toUpperCase() : null;
        if (iso_countries_1.isoCountries.hasOwnProperty(countryCode)) {
            item.country = iso_countries_1.isoCountries[countryCode];
        }
    });
    return data;
};
exports.separateContinentData = (data) => {
    let continentData = [];
    let countryData = [];
    data.forEach((item) => {
        if (item.country === item.continent) {
            continentData.push(item);
        }
        else {
            countryData.push(item);
        }
    });
    return [countryData, continentData];
};
exports.transformMergeObject = (items) => {
    let data = items;
    data.forEach((item) => {
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
exports.deleteNoCountryData = (items) => {
    const noCountryData = ['Channel Islands', 'Diamond Princess', 'MS Zaandam', 'Caribbean Netherlands', 'MS Zaandam ', 'Diamond Princess '];
    let countryData = [];
    items.forEach((item) => {
        const country = item.country;
        const isFind = noCountryData.find((item) => country === item);
        if (!isFind) {
            countryData.push(item);
        }
    });
    return countryData;
};
