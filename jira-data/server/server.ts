// import path from 'path';
import fs from 'fs';
import http from 'http';
import https from 'https';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import history from 'connect-history-api-fallback';

const app = express();
const dev = process.env.ENV === 'dev';
const port = process.env.PORT || !dev ? 80 : 443;
const server = !dev ?
  http.createServer(app) :
  https.createServer(
    {
      key: fs.readFileSync('/etc/letsencrypt/live/gabesztx.duckdns.org/privkey.pem', 'utf8'),
      cert: fs.readFileSync('/etc/letsencrypt/live/gabesztx.duckdns.org/cert.pem', 'utf8'),
      ca: fs.readFileSync('/etc/letsencrypt/live/gabesztx.duckdns.org/chain.pem', 'utf8'),
    }, app);

app.use(history());
app.use(cors());
app.use(express.static(__dirname, {dotfiles: 'allow'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/webhook', (req, res) => {
  console.log('webhook:', req.body);
  res.send({});
});
server.listen(port, () => {
  console.log('Server is running!', 'Port:', port);
});

// const basePath = path.join(__dirname, './');
// res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
// const httpsServer = https.createServer(option, app);
