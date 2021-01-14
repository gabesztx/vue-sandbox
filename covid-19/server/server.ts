// import cors from 'cors';
// import bodyParser from 'body-parser';
import { transformCovidDbData } from './services/covid-data.service';

const cors = require('cors');
import fs from 'fs';
import path from 'path';
import history from 'connect-history-api-fallback';
import express from 'express';
import http from 'http';
import https from 'https';

const dev = process.env.ENV === 'dev';
const port = process.env.PORT || dev ? 80 : 443;
export const basePath = path.join(__dirname, './');

const app = express();
const server = !dev ?
  https.createServer({
    key: fs.readFileSync('/etc/letsencrypt/live/covid.duckdns.org/privkey.pem', 'utf8'),
    cert: fs.readFileSync('/etc/letsencrypt/live/covid.duckdns.org/cert.pem', 'utf8'),
    ca: fs.readFileSync('/etc/letsencrypt/live/covid.duckdns.org/chain.pem', 'utf8'),
  }, app) :
  http.createServer(app);

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
app.use(history());
app.use(cors());
app.use(express.static(`${basePath}`, { dotfiles: 'allow' }));

// TODO: app.get routerek kiszervezése: Then, load the router module in the app:
// https://expressjs.com/en/guide/routing.html

app.get('/getWorld', (req, res) => {
  // res.send(getCovid19World());
});
app.get('/getCountries', (reqx1, res) => {
  // res.send(getCovid19Country());
});
app.get('/getCountries/:countryCode', (req, res) => {
  // res.send(getCovid19CountryDetail(req.params.countryCode));
});
app.get('/getContinents', (req, res) => {
  // res.send(getCovid19Continents());
});
server.listen(port, () => {
  console.log('Http Server started!', 'Port:', port);
});
transformCovidDbData();

// res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
// const httpsServer = https.createServer(option, app);
