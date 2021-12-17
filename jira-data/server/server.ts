// import path from 'path';
import fs from "fs";
import http from "http";
import https from "https";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import history from "connect-history-api-fallback";

const app = express();
const dev = process.env.ENV === "dev";
const port = process.env.PORT || dev ? 80 : 443;
const domain = "jira-sandbox.duckdns.org";
// const domain = 'gabesztx.duckdns.org'
const server = dev ?
  http.createServer(app) :
  https.createServer(
    {
      key: fs.readFileSync(`/etc/letsencrypt/live/${domain}/privkey.pem`, "utf8"),
      cert: fs.readFileSync(`/etc/letsencrypt/live/${domain}/cert.pem`, "utf8"),
      ca: fs.readFileSync(`/etc/letsencrypt/live/${domain}/chain.pem`, "utf8")
    }, app);

app.use(history());
app.use(cors());
app.use(express.static(__dirname, { dotfiles: "allow" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/webhook", (req, res) => {
  triggerLamp();
  console.log(req.body);
  res.send({});
});
server.listen(port, () => {
  console.log("Server is running!", "Port:", port);
});


import axios from "axios";

const triggerLamp = () => {
  axios.get("http://192.168.1.5/cm?cmnd=Power%20TOGGLE").then((res) => {
    console.log("Lamp response:", res);
  });
};
// const basePath = path.join(__dirname, './');
