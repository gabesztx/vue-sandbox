const path = require('path');
const { from, of } = require('rxjs');
const { map, take } = require('rxjs/operators');
const { writeFile } = require('./jsonfile.service');
const covid19Db = require('../db/covid19.db.json');
const covid19TrackingApi = require('../api/covid-19-tracking.p');
const { transformRemoveComma, transformNoData, transformCountryCode } = require('./data-transform.service');

const refreshCovidData = () => {
  covid19TrackingApi
    .$getApi()
    .pipe(
      take(1),
      map((data) => {
        data.pop();
        return data;
      }),
      map((data) => transformNoData(data)),
      map((data) => transformRemoveComma(data)),
      map((data) => transformCountryCode(data)),
    )
    .subscribe((res) => {
      writeFile(path.join(__dirname, '../db/covid19.db.json'), res).then(() => {
        console.log('DONE');
        // mergeFlags();
      });
    });
};

const getGlobalWorldData = () => {
  return covid19DbData()[0];
};

const getCountryData = () => {
  const covid19Db = covid19DbData();
  covid19Db.shift();
  covid19Db.pop();
  return covid19Db;
};

const covid19DbData = () => {
  return JSON.parse(JSON.stringify(covid19Db));
};

module.exports = {
  refreshCovidData: refreshCovidData,
  getCountryData: getCountryData,
  getGlobalWorldData: getGlobalWorldData,
};
