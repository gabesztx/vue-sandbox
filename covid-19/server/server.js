const path = require('path');
const http = require('http');
const cors = require('cors');
const history = require('connect-history-api-fallback');
const bodyParser = require('body-parser');
const express = require('express');
const port = process.env.PORT || 5000;
const basePath = path.join(__dirname, '../dist');

/* App */
const app = express();
app.use(history());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(basePath));

/* Services */
const covidDataService = require('./services/covid-data.service');

/* Server */
const server = http.createServer(app);

// TODO: app.get routerek kiszervezése
app.get('/', (req, res) => {
  return res.sendFile(`${basePath}/index.html`);
});

app.get('/country', (req, res) => {
  // res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  return res.send(covidDataService.getCountryData());
  // return res.send(covidDataService.getCountryData());
});

app.get('/world', (req, res) => {
  return res.send(covidDataService.getGlobalWorldData());
});

server.listen(port, () => console.log(`status: running / port: ${port}`));

covidDataService.refreshCovidData();
