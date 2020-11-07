const path = require('path');
const { from } = require('rxjs');
const { map, take, switchMap } = require('rxjs/operators');
const { writeFile } = require('./jsonfile.service');
const { $getStatistics } = require('../api/covid-193.p.rapidapi');
const { transformCamelizeKeys } = require('../utils/helpers');
const {
  transformRemoveHyphen,
  getCountryCode,
  getCountryName,
  transformRemoveAdds,
  separateContinentData,
  deleteNoCountryData,
  transformMergeObject,
} = require('./data-transform.service');

const covid19CountryDB = require('../db/covid19-country.db.json');
const covid19ContinentDB = require('../db/covid19-continent.db.json');

const writeCovidDataInFile$ = (items) => {
  return from(
    Promise.all([
      writeFile(path.join(__dirname, '../db/covid19-country.db.json'), items[0]),
      writeFile(path.join(__dirname, '../db/covid19-continent.db.json'), items[1]),
    ]),
  );
};

const transformCovidDbData = () => {
  $getStatistics()
    .pipe(
      take(1),
      map((data) => transformRemoveHyphen(data)),
      map((data) => getCountryCode(data)),
      map((data) => getCountryName(data)),
      map((data) => transformRemoveAdds(data)),
      map((data) => transformMergeObject(data)),
      map((data) => transformCamelizeKeys(data)),
      map((data) => deleteNoCountryData(data)),
      map((data) => separateContinentData(data)),
      switchMap((items) => writeCovidDataInFile$(items)),
    )
    .subscribe((res) => {
      console.log('DB Data Done!');
      // writeFile(path.join(__dirname, '../db/covid19-country.db.json'), res).then(() => {
      // });
    });
};

const getTransformCountryDetailData = (data) => {
  const countryKeys = ['continent', 'country', 'day', 'time', 'countryCode', 'population'];
  const detailData = { covidData: {} };
  Object.keys(data).forEach((key) => {
    const isDetail = countryKeys.find((item) => key === item);
    if (isDetail) {
      detailData[key] = data[key];
    } else {
      detailData.covidData[key] = data[key];
    }
  });
  return detailData;
};

const getCovid19CountryDB = () => {
  return JSON.parse(JSON.stringify(covid19CountryDB));
};

const getCovid19CountryDetail = (countryCode) => {
  const countryList = getCovid19CountryDB();
  let countryDetail = countryList.find((data) => data.countryCode === countryCode);
  if (countryDetail) {
    countryDetail = getTransformCountryDetailData(countryDetail);
  }
  return countryDetail || false;
};

const getCovid19ContinentDB = () => {
  return JSON.parse(JSON.stringify(covid19ContinentDB));
};

module.exports = {
  transformCovidDbData: transformCovidDbData,
  getCovid19CountryDetail: getCovid19CountryDetail,
  getCovid19CountryDB: getCovid19CountryDB,
  getCovid19ContinentDB: getCovid19ContinentDB,
};
