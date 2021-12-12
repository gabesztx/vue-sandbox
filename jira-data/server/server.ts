import bodyParser from 'body-parser';
// const cors = require('cors');
import cors from 'cors';
import express from 'express';
import fs from 'fs';
import path from 'path';
import history from 'connect-history-api-fallback';
import http from 'http';
import https from 'https';

const app = express();
const basePath = path.join(__dirname, './');
const dev = process.env.ENV === 'dev';
const port = process.env.PORT || dev ? 80 : 443;
const server = !dev ? https.createServer(
    {
      key: fs.readFileSync('/etc/letsencrypt/live/gabesztx.duckdns.org/privkey.pem', 'utf8'),
      cert: fs.readFileSync('/etc/letsencrypt/live/gabesztx.duckdns.org/cert.pem', 'utf8'),
      ca: fs.readFileSync('/etc/letsencrypt/live/gabesztx.duckdns.org/chain.pem', 'utf8'),
    }, app)
  : http.createServer(app);

app.use(history());
app.use(cors());
app.use(express.static(`${basePath}`, {dotfiles: 'allow'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// const port = 80;
// const server = http.createServer(app);
// app.use(express.static(`${basePath}`));

const dummyResponse = {
  name: 'dummy'
};
// https://expressjs.com/en/guide/routing.html
/*app.get('/getData', (req, res) => {
  res.send(dummyResponse);
});*/
app.post('/webhook', (req, res) => {
  console.log('webhook:', req.body);
  res.send(dummyResponse);
});
server.listen(port, () => {
  console.log('Server is running!', 'Port:', port);
});

// res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
// const httpsServer = https.createServer(option, app);
