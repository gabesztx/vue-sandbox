const path = require('path');
const jsonfile = require('jsonfile');
const covid19tracking = path.join(__dirname, '../db/covid-19-tracking.json');
const countryFlags = path.join(__dirname, '../db/country-flags.json');

const readFile = (file, done) => {
  jsonfile
    .readFile(file)
    .then((res) => done(res))
    .catch((error) => {
      console.log('readFile error', error);
    });
};
const writeFile = (file, obj) => {
  jsonfile
    .writeFile(file, obj)
    .then(() => {
      console.log('write done');
    })
    .catch((error) => {
      console.log('write error', error);
    });
};

module.exports = {
  readFile: readFile,
  writeFile: writeFile,
  data: covid19tracking,
  flags: countryFlags,
};
