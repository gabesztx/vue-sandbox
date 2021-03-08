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


// export const getCovid19World = () => JSON.parse(JSON.stringify(covid19ContinentsDB[0]));
// export const getCovid19Continents = () => JSON.parse(JSON.stringify(covid19ContinentsDB));
// export const getCovid19Country = () => JSON.parse(JSON.stringify(covid19CountryDB));


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
  console.log('countryNames', countryNames);
  return new Promise((resolve) => {
    let countryNum = 0;
    const countryList = [] as any;
    const getAllData = () => {
      console.log('countryNum', countryNum);
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

};

