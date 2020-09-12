const { from, combineLatest } = require('rxjs');
const { take } = require('rxjs/operators');

const path = require('path');
const jsonService = require('../services/jsonfile.service');

const covid19tracking = path.join(__dirname, '../db/covid19.db.json');
const countryFlags = path.join(__dirname, '../db/flags.json');

const $flags = from(jsonService.readFile(countryFlags));
const $covid = from(jsonService.readFile(covid19tracking));

const $getFiles = combineLatest($flags, $covid, (a, b) => {
  return [a, b];
});

// TODO: refactorálni és láncolni

const mergeFlags = () => {
  $getFiles
    .pipe(
      take(1),
    )
    .subscribe((res) => {
      const flags = res[0];
      const data = res[1];
      const findCountry = (country) => {
        return flags.find((el) => el.countryText === country);
      };

      const mergeFlagsData = data.map((item) => {
        const foundFlag = findCountry(item.countryText);
        item['flagIcon'] = foundFlag ? foundFlag.regionFlagUrl : '-';
        return item;
      });
      jsonService.writeFile(covid19tracking, mergeFlagsData).then(() => {
        console.log('DB DONE');
      });
    });

};

module.exports = {
  mergeFlags: mergeFlags,
};