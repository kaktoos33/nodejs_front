const express = require('express');
const cors = require('cors');
const app = express();
const router = require('../routers/router');

app.use(cors());
app.use(express.json());
app.set("view engine", "ejs");
//app.engine("ejs", rquire("ejs").__express);
app.use(express.static('public'));
app.use(express.static('views'));
app.use('/', router);
module.exports = app;