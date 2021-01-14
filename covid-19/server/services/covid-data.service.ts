import { combineLatest, forkJoin, from, Observable, of } from 'rxjs';
import { map, take, switchMap, tap, mergeMap, filter } from 'rxjs/operators';

// const fs = require('fs');
import fs from 'fs';
import { basePath } from '../server';
import { getPreviousDayOfNumber, transformCamelizeKeys } from '../helpers/helpers';
import { $getStatistics, $getHistory, $getCountries } from '../api/covid-193.p.rapidapi';
import { jsFileService } from './jsonfile.service';
import {
  getCountryCode,
  getCountryName,
  transformRemoveHyphen,
  transformRemoveAdds,
  transformMergeObject,
  transformContinentCountryData,
  removeUnusedContinent,
  transformCountryName,
  removeCountries,
  // separateContinentData,
  // deleteSameCountry,
} from './covid-data-transform.service';
import moment from 'moment';
import { isoCountriesSchema } from '../helpers/iso-countries_schema';
// import { response } from 'express';

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

// const writeCovidDataInFile$ = (data: any, fileName: string) => from(
//   jsFileService.writeJsonFile(`${basePath}/db/${fileName}.json`, data)
// );

const getNoData = {
  continent: 'N/A',
  country: 'N/A',
  countryCode: 'N/A',
  population: 'N/A',
  day: 'N/A',
  time: 'N/A',
  countrySearch: 'N/A',
  casesNew: 'N/A',
  casesActive: 'N/A',
  casesCritical: 'N/A',
  casesRecovered: 'N/A',
  cases1MPop: 'N/A',
  casesTotal: 'N/A',
  deathsNew: 'N/A',
  deaths1MPop: 'N/A',
  deathsTotal: 'N/A',
  tests1MPop: 'N/A',
  testsTotal: 'N/A',
};

const writeCovidDataInFile$ = (data: any, fileName: string) => {
  return jsFileService.writeJsonFile(`${basePath}/db/${fileName}.json`, data);
};

const transformData$ = (data): Observable<any> => {
  return of(data).pipe(
    // map((data) => removeUnusedContinent(data)),
    map((data) => transformCountryName(data)),
    map((data) => transformRemoveHyphen(data)),
    map((data) => getCountryCode(data)),
    map((data) => transformMergeObject(data)),
    map((data) => transformCamelizeKeys(data))
  );
};
const getContinentList = () => {
  return new Promise((resolve) => {
    $getStatistics()
      .pipe(
        map((data) => removeUnusedContinent(data)),
        map((data) => removeCountries(data)),
        mergeMap((data) => transformData$(data))
        // map(item => item.find((val) => val.continent === 'All'))
        // tap(data => console.log('LOG:', data)),
        // mergeMap((data) => writeCovidDataInFile$(data, 'statistics')),
      )
      .subscribe((list) => {
        writeCovidDataInFile$(list, `country-data-continent`).then(() => {
          resolve(list);
        });
      });
  });
};
const getCountryList = (countryNames: any[], dayNumber?: number) => {
  return new Promise((resolve) => {
    let countryNum = 0;
    let countryList = [] as any;
    const getAllData = () => {
      countryNum++;
      $getHistory({
        country: countryNames[countryNum - 1].country,
        day: getPreviousDayOfNumber(dayNumber),
      })
        .pipe(
          mergeMap((data) => transformData$(data)),
          map((value) => {
            const item = value[0];
            return item
              ? item
              : {
                  ...getNoData,
                  country: countryNames[countryNum - 1].country,
                  countryCode: countryNames[countryNum - 1].countryCode,
                  noData: true,
                };
          }),
          take(1)
        )
        .subscribe(
          (country) => {
            countryList.push(country);
            if (countryNames.length === countryNum) {
              writeCovidDataInFile$(countryList, `country-data-${dayNumber}`).then(() => {
                resolve(countryList);
              });
            } else {
              getAllData();
            }
          },
          (error) => {
            console.log('------------- ERROR ----------------');
            console.log(error);
          }
        );
    };
    getAllData();
  });
};

export const transformCovidDbData = async () => {
  const countryNames = await jsFileService.readJsonFile(`${basePath}/db/countries.json`);
  const allData = await Promise.all([
    getContinentList(),
    getCountryList(countryNames, 0),
    getCountryList(countryNames, 1),
    getCountryList(countryNames, 2),
  ]);
  // const continents = await getContinentList();
  console.log('All Done!');
  // TODO: adatok betöltése client oldalon :)

  /* forkJoin([
     from(getCountryList(countryNames, 0)),
     from(getCountryList(countryNames, 1)),
     from(getCountryList(countryNames, 2)),
   ]).subscribe((res) => {
     console.log('!!! ALL DONE !!!!');
   });*/
  // console.log('yesterday OK');
  // const beforeYesterday = await getCountriesHistory(countries, 2);
  // console.log('beforeYesterday OK');

  /*  $getStatistics()
    .pipe(
      map((data) => removeUnusedContinent(data)),
      map((data) => removeContinent(data)),
      mergeMap((data) => transformData$(data)),
      mergeMap((data) => writeCovidDataInFile$(data, 'statistics')),
    )
    .subscribe((list) => {
      console.log('done');
    });*/
};

/*const getCountriesStatistics = (countries: any[]): Promise<any> => {
  return new Promise((resolve) => {
    forkJoin(countries.map(country =>
      $getStatistics({country: country}).pipe(
        mergeMap(data => transformData$(data)),
        map(value => value[0])))
    ).pipe(
      mergeMap((data) => writeCovidDataInFile$(data, `statistics`)),
      take(1),
    ).subscribe((data) => resolve(data));
  });
};*/

/*
$getStatistics()
.pipe(
  map((data) => removeUnusedContinent(data)),
  map((data) => removeContinent(data)),
  mergeMap((data) => transformData$(data)),
  tap(data => console.log('LOG:', data.length)),
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
