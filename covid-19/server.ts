// const path = require('path');
import path from "path";
import http from "http";
import cors from "cors";
import history from "connect-history-api-fallback";
import bodyParser from "body-parser";
import express from "express";

const port = process.env.PORT || 5000;
const basePath = path.join(__dirname, "./build");

/* App */
const app = express();
app.use(history());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(basePath));

/* Services */
import {
  getCovid19ContinentDB,
  getCovid19CountryDB,
  getCovid19CountryDetail,
  transformCovidDbData,
} from "./server/services/covid-data.service";

/* Server */
const server = http.createServer(app);

// TODO: app.get routerek kiszervezése
app.get("/", (req, res) => {
  return res.sendFile(`${basePath}/index.html`);
});

app.get("/continent", (req, res) => {
  return res.send(getCovid19ContinentDB());
});
app.get("/world", (req, res) => {
  return res.send(getCovid19ContinentDB()[0]);
});
app.get("/countries", (req, res) => {
  return res.send(getCovid19CountryDB());
});
app.get("/countries/:countryCode", (req, res) => {
  return res.send(getCovid19CountryDetail(req.params.countryCode));
});

server.listen(port, () => {
  transformCovidDbData();
});

// res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
