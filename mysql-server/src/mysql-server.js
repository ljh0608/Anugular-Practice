var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var PORT = process.env.PORT || 8060;
app.use(cors());
app.use(bodyParser.json());
app.use('/', require('./app/mysql/route/route'));
var db = require('./app/mysql/model/index');
db.sequelizeConfig.sync();
app.get('/', function (req, res) {
    res.json({ message: "Server is running on port ".concat(PORT) });
});
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
