"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = exports.basePath = void 0;
const cors_1 = __importDefault(require("cors"));
const connect_history_api_fallback_1 = __importDefault(require("connect-history-api-fallback"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const path_1 = __importDefault(require("path"));
exports.basePath = path_1.default.join(__dirname, './');
exports.port = process.env.PORT || 5000;
const covid_data_service_1 = require("./services/covid-data.service");
/* App */
const app = express_1.default();
app.use(connect_history_api_fallback_1.default());
app.use(cors_1.default());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(`${exports.basePath}`));
/* Server */
const server = http_1.default.createServer(app);
// app.get('/', (req, res) => {
//   return res.sendFile(`${basePath}/build/index.html`);
// });
// TODO: app.get routerek kiszervezése
app.get('/continent', (req, res) => {
    return res.send(covid_data_service_1.getCovid19ContinentDB());
});
app.get('/world', (req, res) => {
    return res.send(covid_data_service_1.getCovid19ContinentDB()[0]);
});
app.get('/countries', (req, res) => {
    return res.send(covid_data_service_1.getCovid19CountryDB());
});
app.get('/countries/:countryCode', (req, res) => {
    return res.send(covid_data_service_1.getCovid19CountryDetail(req.params.countryCode));
});
server.listen(exports.port, () => {
    covid_data_service_1.transformCovidDbData();
});
// res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
