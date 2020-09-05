const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const axios = require('axios');
const app = express();

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', PORT);
app.set('env', NODE_ENV);
app.use(cors());

app.get('/data', (req, res) => {
  res.send({});
});

app.listen(PORT, () => {
  console.log(`Express Server started on Port ${app.get('port')} | Environment : ${app.get('env')}`);
});

const data = [
  {
    name: 'king arthur',
    password: 'password1',
    profession: 'king',
    id: 1,
  },
  {
    name: 'rob kendal',
    password: 'password3',
    profession: 'code fiddler',
    id: 2,
  },
  {
    name: 'teresa may',
    password: 'password2',
    profession: 'brexit destroyer',
    id: 6,
  },
];

/*
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
*/
