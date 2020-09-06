const path = require('path');
const http = require('http');
// const https = require('https');
// const axios = require('axios');
const cors = require('cors');
const history = require('connect-history-api-fallback');
const bodyParser = require('body-parser');

const express = require('express');
const app = express();

const baseURL = path.join(__dirname, '../dist');
const port = process.env.PORT || 5000;
const server = http.createServer(app);

app.use(history());
app.use(express.static(baseURL));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.get('/', (req, res) => res.sendFile(`${basePath}/index.html`));

server.listen(port, () => {
  console.log(`Server status: running`);
  console.log(`Server port: ${port}`);
});
