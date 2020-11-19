import { from } from 'rxjs';
import { map, take, switchMap } from 'rxjs/operators';
import { basePath } from '../server';
import { transformCamelizeKeys } from '../helpers/helpers';
import { $getStatistics } from '../api/covid-193.p.rapidapi';
import { jsFileService } from './jsonfile.service';
import {
  transformRemoveHyphen,
  getCountryCode,
  getCountryName,
  transformRemoveAdds,
  transformMergeObject,
  deleteNoCountryData,
  separateContinentData,
} from './covid-data-transform.service';

const covid19CountryDB = require(`${basePath}/db/covid19-country.db.json`);
const covid19ContinentDB = require(`${basePath}/db/covid19-continent.db.json`);

const writeCovidDataInFile$ = (items: any) => from(
  Promise.all([
    jsFileService.writeJsonFile(`${basePath}/db/covid19-country.db.json`, items[0]),
    jsFileService.writeJsonFile(`${basePath}/db/covid19-continent.db.json`, items[1]),
  ]),
);

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

  let detailData = { covidData: {} };
  countryKeys.forEach((key) => {
    detailData[key] = data[key];
  });
  covidDataOrder.forEach((key) => {
    detailData.covidData[key] = data[key];
  });
  return detailData;
};

export const getCovid19ContinentDB = () => JSON.parse(JSON.stringify(covid19ContinentDB))
export const getCovid19CountryDB = () => JSON.parse(JSON.stringify(covid19CountryDB));
export const getCovid19CountryDetail = (countryCode: string) => {
  const countryList = getCovid19CountryDB();
  let countryDetail = countryList.find((data) => data.countryCode === countryCode);
  if (countryDetail) {
    countryDetail = getTransformCountryDetailData(countryDetail);
  }
  return countryDetail || false;
};

export const transformCovidDbData = () => {
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
  .subscribe(() => {
    console.log('DB Data Done!');
  });
};
