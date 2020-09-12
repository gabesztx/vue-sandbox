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
    )
    .subscribe((res) => {
      // TODO: rxjs refacrtor
      writeFile(path.join(__dirname, '../db/covid19.db.json'), res).then(() => {
        mergeFlags();
      });
    });
};

module.exports = {
  refreshCovidData: refreshCovidData,
  covid19Db: covid19Db,
};

/*
map((data) => {
  let newData = [];
  data.forEach((item, key) => {
    newData[key] = item;
  });
  return newData;
}),
*/
