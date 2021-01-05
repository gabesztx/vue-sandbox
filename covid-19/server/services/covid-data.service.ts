import { forkJoin, from, of } from 'rxjs';
import { map, take, switchMap, tap, mergeMap } from 'rxjs/operators';

// const fs = require('fs');
import fs from 'fs';
import { basePath } from '../server';
import { transformCamelizeKeys } from '../helpers/helpers';
import { $getStatistics, $getHistory } from '../api/covid-193.p.rapidapi';
import { jsFileService } from './jsonfile.service';
import {
  getCountryCode,
  getCountryName,
  transformRemoveHyphen,
  transformRemoveAdds,
  transformMergeObject,
  transformContinentCountryData, removeUnusedContinent, removeContinent, transformCountryName,
  // separateContinentData,
  // deleteSameCountry,
} from './covid-data-transform.service';
import moment from 'moment';

// const covid19CountryDB = require(`${basePath}/db/covid19-country.db.json`);
// const covid19ContinentsDB = require(`${basePath}/db/covid19-continent.db.json`);

/*const writeCovidDataInFile$ = (items: any) => from(
  jsFileService.writeJsonFile(`${basePath}/db/covid19-country.db.json`, items),
  // Promise.all([
  //   jsFileService.writeJsonFile(`${basePath}/db/covid19-country.db.json`, items[0]),
  //   jsFileService.writeJsonFile(`${basePath}/db/covid19-continent.db.json`, items[1]),
  // ]),
);*/

/*
const getTransformCountryDetailData = (data: any) => {
  const countryKeys = [
    'continent',
    'country',
    'day',
    'time',
    'countryCode',
    'population',
  ];
  const covidDataOrder = [
    'casesNew',
    'deathsNew',
    'casesActive',
    'casesCritical',
    'casesRecovered',
    'casesTotal',
    'casesTotal',
    'deathsTotal',
    'testsTotal',
    'cases1MPop',
    'deaths1MPop',
    'tests1MPop',
  ];

  const detailData = {covidData: {}};
  countryKeys.forEach((key) => {
    detailData[key] = data[key];
  });
  covidDataOrder.forEach((key) => {
    detailData.covidData[key] = data[key];
  });
  return detailData;
};
*/

// export const getCovid19World = () => JSON.parse(JSON.stringify(covid19ContinentsDB[0]));
// export const getCovid19Continents = () => JSON.parse(JSON.stringify(covid19ContinentsDB));
// export const getCovid19Country = () => JSON.parse(JSON.stringify(covid19CountryDB));

/*export const getCovid19CountryDetail = (countryCode: string) => {
  const countryList = getCovid19Country();
  let countryDetail = countryList.find((data) => data.countryCode === countryCode);
  if (countryDetail) {
    countryDetail = getTransformCountryDetailData(countryDetail);
  }
  return countryDetail || false;
};*/

const writeCovidDataInFile$ = (data: any, fileName: string) => from(
  jsFileService.writeJsonFile(`${basePath}/db/${fileName}.json`, data),
  // Promise.all([
  //   jsFileService.writeJsonFile(`${basePath}/db/covid19-country.db.json`, items[0]),
  //   jsFileService.writeJsonFile(`${basePath}/db/covid19-continent.db.json`, items[1]),
  // ]),
);

const transformData = (data) => {
  return of(data).pipe(
    // map((data) => removeUnusedContinent(data)),
    map((data) => getCountryCode(data)),
    map((data) => transformCountryName(data)),
    map((data) => transformRemoveHyphen(data)),
    map((data) => transformMergeObject(data)),
    map((data) => transformCamelizeKeys(data)),
  );
};
const getHistoryData = (countries: any[], dayNumber: number) => {
  const day = moment().subtract(dayNumber, 'day').format('YYYY-MM-DD');
  forkJoin(countries.map((country) => {
      console.log('---', country);
    })
  );
  // console.log(countries);
// console.log(dayNumber);
// console.log(country);
};
/*const $getHistory({
  country: country,
  day: day,
}).pipe(
  mergeMap((data) => transformData(data)),
  map((value) => value[0])
);*/


export const transformCovidDbData = () => {
  jsFileService.readJsonFile(`${basePath}/db/countries.json`).then((countries: string[]) => {
    getHistoryData(countries, 0);
  });

  /* $getStatistics()
   .pipe(
     map((data) => removeUnusedContinent(data)),
     map((data) => removeContinent(data)),
     mergeMap((data) => transformData(data)),
     tap(data => console.log('Static Number:', data.length)),
     mergeMap((data) => writeCovidDataInFile$(data, 'statistics')),
   )
   .subscribe((list) => {
     console.log('done');
   });*/


  /*.pipe(
    mergeMap((data) => writeCovidDataInFile$(data, 'history-0'))
  )*/
  // .subscribe((res) => {
  //   console.log('History ok!');
  // });
  /*forkJoin(
    countries.map((country) => {
      // console.log(country);
      return $getHistory({
        country: country,
        day: day,
      });/!*.pipe(
        mergeMap((data) => transformData(data)),
        map((value) => value[0]),
      );*!/
    })).subscribe((res) => {
    console.log('history Ok');
  });*/
  // .pipe(
  // mergeMap((data) => writeCovidDataInFile$(data, 'history-0'))
  // );


};

/*
// $getStatistics()
.pipe(
  map((data) => removeUnusedContinent(data)),
  map((data) => removeContinent(data)),
  mergeMap((data) => transformData(data)),
  tap(data => console.log('Static Number:', data.length)),
  mergeMap((data) => writeCovidDataInFile$(data, 'statistics')),
)
.subscribe((list) => {
  console.log('done');
});
*/


/*
$getCountries()
.pipe(
  tap(data => console.log('Countries List Number:', data.length)),
  mergeMap((data) => writeCovidDataInFile$(data, 'countries')),
)
.subscribe((data) => {
  // console.log('countries ok');
});
*/
