// import cors from 'cors';
const cors = require('cors');
import fs from 'fs';
import path from 'path';
import history from 'connect-history-api-fallback';
import bodyParser from 'body-parser';
import express from 'express';
import http from 'http';
import https from 'https';

export const basePath = path.join(__dirname, './');
export const httpPort = process.env.PORT || 80;
export const httpsPort = process.env.PORT || 443;


// const privateKey = fs.readFileSync('./cert/privkey.pem');
// const certificate = fs.readFileSync('./cert/cert.pem');


const privateKey = fs.readFileSync('/etc/letsencrypt/live/kbsz.duckdns.org/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/kbsz.duckdns.org/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/kbsz.duckdns.org/chain.pem', 'utf8');

const option = {
  key: privateKey,
  cert: certificate,
  ca: ca,
};

const app = express();
// const httpServer = http.createServer(app);
const httpsServer = https.createServer(option, app);

app.use(history());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.static(`${basePath}`, {dotfiles: 'allow'}));

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

/*httpServer.listen(httpPort, () => {
  console.log('Http Server started!', 'Port:', httpPort);
});*/

httpsServer.listen(httpsPort, () => {
  console.log('Https Server started!', 'Port:', httpsPort);
});
// transformCovidDbData();
// res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
