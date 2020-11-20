"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformCovidDbData = exports.getCovid19CountryDetail = exports.getCovid19CountryDB = exports.getCovid19ContinentDB = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const server_1 = require("../server");
const helpers_1 = require("../helpers/helpers");
const covid_193_p_rapidapi_1 = require("../api/covid-193.p.rapidapi");
const jsonfile_service_1 = require("./jsonfile.service");
const covid_data_transform_service_1 = require("./covid-data-transform.service");
const covid19CountryDB = require(`${server_1.basePath}/db/covid19-country.db.json`);
const covid19ContinentDB = require(`${server_1.basePath}/db/covid19-continent.db.json`);
const writeCovidDataInFile$ = (items) => rxjs_1.from(Promise.all([
    jsonfile_service_1.jsFileService.writeJsonFile(`${server_1.basePath}/db/covid19-country.db.json`, items[0]),
    jsonfile_service_1.jsFileService.writeJsonFile(`${server_1.basePath}/db/covid19-continent.db.json`, items[1]),
]));
const getTransformCountryDetailData = (data) => {
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
exports.getCovid19ContinentDB = () => JSON.parse(JSON.stringify(covid19ContinentDB));
exports.getCovid19CountryDB = () => JSON.parse(JSON.stringify(covid19CountryDB));
exports.getCovid19CountryDetail = (countryCode) => {
    const countryList = exports.getCovid19CountryDB();
    let countryDetail = countryList.find((data) => data.countryCode === countryCode);
    if (countryDetail) {
        countryDetail = getTransformCountryDetailData(countryDetail);
    }
    return countryDetail || false;
};
exports.transformCovidDbData = () => {
    covid_193_p_rapidapi_1.$getStatistics()
        .pipe(operators_1.take(1), operators_1.map((data) => covid_data_transform_service_1.transformRemoveHyphen(data)), operators_1.map((data) => covid_data_transform_service_1.getCountryCode(data)), operators_1.map((data) => covid_data_transform_service_1.getCountryName(data)), operators_1.map((data) => covid_data_transform_service_1.transformRemoveAdds(data)), operators_1.map((data) => covid_data_transform_service_1.transformMergeObject(data)), operators_1.map((data) => helpers_1.transformCamelizeKeys(data)), operators_1.map((data) => covid_data_transform_service_1.deleteNoCountryData(data)), operators_1.map((data) => covid_data_transform_service_1.separateContinentData(data)), operators_1.switchMap((items) => writeCovidDataInFile$(items)))
        .subscribe(() => {
        console.log('DB Data Done!');
    });
};
