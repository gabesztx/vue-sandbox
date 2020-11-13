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
const covidDataService = require('./common/services/covid-data.service');

/* Server */
const server = http.createServer(app);

// TODO: app.get routerek kiszervezése
app.get('/', (req, res) => {
  return res.sendFile(`${basePath}/index.html`);
});

app.get('/continent', (req, res) => {
  return res.send(covidDataService.getCovid19ContinentDB());
});
app.get('/world', (req, res) => {
  return res.send(covidDataService.getCovid19ContinentDB()[0]);
});
app.get('/countries', (req, res) => {
  return res.send(covidDataService.getCovid19CountryDB());
});
app.get('/countries/:countryCode', (req, res) => {
  return res.send(covidDataService.getCovid19CountryDetail(req.params.countryCode));
});

server.listen(port, () => {});
covidDataService.transformCovidDbData();

// res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
