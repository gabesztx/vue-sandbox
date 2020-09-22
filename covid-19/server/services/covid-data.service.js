const path = require('path');
const { from, of } = require('rxjs');
const { map, take } = require('rxjs/operators');
const { writeFile } = require('./jsonfile.service');
const covid19Db = require('../db/covid19.db.json');
const { $getApi } = require('../api/covid-19-tracking.p');
const { $getLatestCountryDataByCode } = require('../api/covid-19-data.p.rapidapi');
const { transformRemoveComma, transformNoData, transformCountryCode, transformRemoveAdds } = require('./data-transform.service');

const refreshCovidData = () => {
  $getApi().pipe(
    take(1),
    map((data) => {
      data.pop();
      return data;
    }),
    map((data) => transformNoData(data)),
    map((data) => transformRemoveComma(data)),
    map((data) => transformCountryCode(data)),
    map((data) => transformRemoveAdds(data)),
  )
    .subscribe((res) => {
      writeFile(path.join(__dirname, '../db/covid19.db.json'), res).then(() => {
        console.log('Data Done');
        // mergeFlags();
      });
    });


  /*$getLatestCountryDataByCode('it')
    .pipe(
      take(1),
    )
    .subscribe((res) => {
      console.log('OK', res);
    });*/
};


const covid19DbData = () => {
  return JSON.parse(JSON.stringify(covid19Db));
};

const getWorldData = () => {
  return covid19DbData()[0];
};

const getCountryData = () => {
  const covid19Db = covid19DbData();
  covid19Db.shift();
  return covid19Db;
};

module.exports = {
  refreshCovidData: refreshCovidData,
  getCountryData: getCountryData,
  getWorldData: getWorldData,
};
