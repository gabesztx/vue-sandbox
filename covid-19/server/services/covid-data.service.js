const path = require('path');
const { from, of } = require('rxjs');
const { map, take, switchMap } = require('rxjs/operators');
const jsonService = require('../services/jsonfile.service');
const { writeFile } = require('./jsonfile.service');
const { $getApi } = require('../api/covid-19-tracking.p');
const { $getStatistics } = require('../api/covid-193.p.rapidapi');
const {
  transformCountryCode,
  transformRemoveHyphen,
  transformRemoveAdds,
  separateContinentData,
} = require('./data-transform.service');

const covid19CountryDB = require('../db/covid19-country.db.json');
const covid19ContinentDB = require('../db/covid19-continent.db.json');

const refreshCovidData = () => {
  $getStatistics()
    .pipe(
      take(1),
      map((data) => transformRemoveHyphen(data)),
      map((data) => transformCountryCode(data)),
      map((data) => transformRemoveAdds(data)),
      map((data) => separateContinentData(data)),
      switchMap((items) => {
        return from(
          Promise.all([
            jsonService.writeFile(path.join(__dirname, '../db/covid19-country.db.json'), items[0]),
            jsonService.writeFile(path.join(__dirname, '../db/covid19-continent.db.json'), items[1]),
          ])
        );
      })
    )
    .subscribe((res) => {
      console.log('Data Done');
      /*  jsonService.writeFile(path.join(__dirname, '../db/covid19-country.db.json'), res[1]).then(() => {
          console.log('DONE');
          // });
        });*/
    });
};

/*const writeDbFile$ = (data, path) => {
  return from(writeFile(path.join(__dirname, '../db/covid19-country.db.json'), data));
};*/

/*const refreshCovidData = () => {
  $getApi().pipe(
    take(1),
    map((data) => {
      data.pop();
      return data;
    }),
    map((data) => transformNoData(data)),
    map((data) => transformRemoveComma(data)),
    map((data) => transformCountryCode(data)),
    map((data) => transformRemoveAdds(data)))
    .subscribe((res) => {
      console.log(res);
      writeFile(path.join(__dirname, '../db/covid19-country.db.json'), res).then(() => {
        console.log('Data Done');
      });
    });
};*/

const getCovid19CountryDB = () => {
  return JSON.parse(JSON.stringify(covid19CountryDB));
};

const getCovid19ContinentDB = () => {
  return JSON.parse(JSON.stringify(covid19ContinentDB));
};

module.exports = {
  refreshCovidData: refreshCovidData,
  getCovid19CountryDB: getCovid19CountryDB,
  getCovid19ContinentDB: getCovid19ContinentDB,
};
