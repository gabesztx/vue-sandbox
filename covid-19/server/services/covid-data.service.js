const path = require('path');
const { from } = require('rxjs');
const { map, take, switchMap } = require('rxjs/operators');
const { writeFile } = require('./jsonfile.service');
const { $getStatistics } = require('../api/covid-193.p.rapidapi');
const { transformCamelizeKeys } = require('../utils/helpers');
const {
  transformCountryCode,
  transformRemoveHyphen,
  transformRemoveAdds,
  separateContinentData,
  transformMergeObject,
} = require('./data-transform.service');

const covid19CountryDB = require('../db/covid19-country.db.json');
const covid19ContinentDB = require('../db/covid19-continent.db.json');

const writeCovidDataInFile$ = (items) => {
  return from(
    Promise.all([
      writeFile(path.join(__dirname, '../db/covid19-country.db.json'), items[0]),
      writeFile(path.join(__dirname, '../db/covid19-continent.db.json'), items[1]),
    ])
  );
};

const transformCovidDbData = () => {
  $getStatistics()
    .pipe(
      take(1),
      map((data) => transformRemoveHyphen(data)),
      map((data) => transformCountryCode(data)),
      map((data) => transformRemoveAdds(data)),
      map((data) => transformMergeObject(data)),
      map((data) => transformCamelizeKeys(data)),
      map((data) => separateContinentData(data)),
      switchMap((items) => writeCovidDataInFile$(items))
    )
    .subscribe((res) => {
      console.log('DB Data Done!');
      // writeFile(path.join(__dirname, '../db/covid19-country.db.json'), res).then(() => {});
    });
};

const getCovid19CountryDB = () => {
  return JSON.parse(JSON.stringify(covid19CountryDB));
};

const getCovid19ContinentDB = () => {
  return JSON.parse(JSON.stringify(covid19ContinentDB));
};

module.exports = {
  transformCovidDbData: transformCovidDbData,
  getCovid19CountryDB: getCovid19CountryDB,
  getCovid19ContinentDB: getCovid19ContinentDB,
};
