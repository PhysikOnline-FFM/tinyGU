/**
 * @file server.ts
 *
 * Main configuration file for the express server.
 *
 * @author Lars Gröber
 */

import express = require('express');
import path = require('path');
import bodyParser = require('body-parser');
import router = require('./router');

const url = '/site';

// setup express
const app = express();
app.use(bodyParser.json());

// setup CORS Middleware (if needed)

// default route
app.use(bodyParser.urlencoded({extended: false}));
app.use(url, express.static(path.join(__dirname, '../dist')));


app.get('/', (req, res) => {
  res.redirect(url);
});

app.get(url + '/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// setup routes
app.use('/', router);

// start server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Listening for http requests on port ${port}`);
});
