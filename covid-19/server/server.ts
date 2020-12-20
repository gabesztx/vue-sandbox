// import cors from 'cors';
const cors = require('cors')
import history from 'connect-history-api-fallback';
import bodyParser from 'body-parser';
import express from 'express';
import http from 'http';
import path from 'path';
export const basePath = path.join(__dirname, './');
export const port = process.env.PORT || 80;
import {
  getCovid19World,
  getCovid19Continents,
  getCovid19Country,
  getCovid19CountryDetail,
  transformCovidDbData,
} from './services/covid-data.service';

/* App */
const app = express();
const server = http.createServer(app);

app.use(history());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.static(`${basePath}`));

// TODO: app.get routerek kiszervezése: Then, load the router module in the app:
// https://expressjs.com/en/guide/routing.html

app.post('/continent', (req, res) => {
  const continent = req.body;
  // res.end('oh_yes')
  // return res.send(getCovid19Continents());
});
app.get('/continents', (req, res) => {
  res.send(getCovid19Continents());
});
app.get('/world', (req, res) => {
  res.send(getCovid19World());
});
app.get('/countries', (req, res) => {
  res.send(getCovid19Country());
});
app.get('/countries/:countryCode', (req, res) => {
  res.send(getCovid19CountryDetail(req.params.countryCode));
});
server.listen(port, () => {
  transformCovidDbData();
});
// res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
