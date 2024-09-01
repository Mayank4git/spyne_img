require("dotenv").config();
const http = require("http");
const express = require("express");
const app = express();

const routes = require('./src/routes/routes.js');
app.use('/', routes); // to use the routes
const server = http.createServer(app);
const port = process.env.API_PORT ? process.env.API_PORT : 9001;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

