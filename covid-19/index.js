"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const connect_history_api_fallback_1 = __importDefault(require("connect-history-api-fallback"));
const node_helper_1 = require("./helpers/node-helper");
const covid_data_service_1 = require("./common/services/covid-data.service");
const app = express_1.default();
app.use(connect_history_api_fallback_1.default());
app.use(cors_1.default());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(node_helper_1.basePath));
/* Server */
const server = http_1.default.createServer(app);
/*
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
*/
server.listen(node_helper_1.port, () => {
    covid_data_service_1.transformCovidDbData();
});
