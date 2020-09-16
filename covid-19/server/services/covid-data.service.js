const path = require('path');
const { from, of } = require('rxjs');
const { map, take, switchMap } = require('rxjs/operators');
const { writeFile, readFile } = require('./jsonfile.service');
const covid19Db = require('../db/covid19.db.json');
const covid19TrackingApi = require('../api/covid-19-tracking.p');
const { mergeFlags } = require('../utils/merge-data');

const refreshCovidData = () => {
  covid19TrackingApi
    .$getApi()
    .pipe(
      take(1),
      map((data) => {
        data.pop();
        return data;
      }),
      map((data) => {
        data.forEach((items) => {
          Object.keys(items).forEach((key) => {
            let activeCasesText = items[key];
            if (items[key].search(',') > 0) {
              activeCasesText = items[key].replace(/,/g, '');
            }
            if (!activeCasesText.length || activeCasesText === 'N/A') {

              activeCasesText = '-';
            }
            items[key] = activeCasesText;

          });
        });
        return data;
      }),
    )

    .subscribe((res) => {
      // TODO: rxjs refacrtor
      writeFile(path.join(__dirname, '../db/covid19.db.json'), res).then(() => {
        mergeFlags();
      });
    });
};

const getGlobalWorldData = () => {
  return covid19DbData()[0];
};

const getCountryData = () => {
  const country = covid19DbData();
  country.shift();
  // country.pop();
  return country;
};

const covid19DbData = () => {
  return JSON.parse(JSON.stringify(covid19Db));
};

module.exports = {
  refreshCovidData: refreshCovidData,
  getCountryData: getCountryData,
  getGlobalWorldData: getGlobalWorldData,
};
