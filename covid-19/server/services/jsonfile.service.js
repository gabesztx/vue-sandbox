const jsonfile = require('jsonfile');

const readFile = (file) => jsonfile.readFile(file);
const writeFile = (file, obj) => jsonfile.writeFile(file, obj);

module.exports = {
  readFile: readFile,
  writeFile: writeFile,
};
