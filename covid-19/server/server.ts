import cors from 'cors';
import history from 'connect-history-api-fallback';
import bodyParser from 'body-parser';
import express from 'express';
import http from 'http';
import path from 'path';
export const basePath = path.join(__dirname, './');
export const port = process.env.PORT || 5000;
import {
  getCovid19World,
  getCovid19Continents,
  getCovid19Country,
  getCovid19CountryDetail,
  transformCovidDbData,
} from './services/covid-data.service';

/* App */
const app = express();
app.use(history());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(`${basePath}`));
/* Server */
const server = http.createServer(app);

// app.get('/', (req, res) => {
//   return res.sendFile(`${basePath}/build/index.html`);
// });

// TODO: app.get routerek kiszervezése
app.get('/continents', (req, res) => {
  return res.send(getCovid19Continents());
});
app.get('/world', (req, res) => {
  return res.send(getCovid19World());
});
app.get('/countries', (req, res) => {
  return res.send(getCovid19Country());
});
app.get('/countries/:countryCode', (req, res) => {
  return res.send(getCovid19CountryDetail(req.params.countryCode));
});
server.listen(port, () => {
  transformCovidDbData();
});
// res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
