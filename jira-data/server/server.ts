// import bodyParser from 'body-parser';
// const cors = require('cors');
import cors from 'cors';
import express from 'express';
import fs from 'fs';
import path from 'path';
import history from 'connect-history-api-fallback';
import http from 'http';
import https from 'https';

const basePath = path.join(__dirname, './');
const dev = process.env.ENV === 'dev';
const port = process.env.PORT || dev ? 80 : 443;

const app = express();
const server = !dev ? https.createServer(
    {
      key: fs.readFileSync('/etc/letsencrypt/live/covid.duckdns.org/privkey.pem', 'utf8'),
      cert: fs.readFileSync('/etc/letsencrypt/live/covid.duckdns.org/cert.pem', 'utf8'),
      ca: fs.readFileSync('/etc/letsencrypt/live/covid.duckdns.org/chain.pem', 'utf8'),
    }, app)
  : http.createServer(app);
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
app.use(history());
app.use(cors());
app.use(express.static(`${basePath}`, {dotfiles: 'allow'}));


// https://expressjs.com/en/guide/routing.html
/*app.get('/getWorld', (req, res) => {
  res.send(getWorld());
});
*/
server.listen(port, () => {
  console.log('Server is running!', 'Port:', port);
});

// res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
// const httpsServer = https.createServer(option, app);
