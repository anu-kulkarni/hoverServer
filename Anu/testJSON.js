var express= require('express');
var bodyParser = require('body-parser');

var app=express();
var jsonParser = bodyParser.json();

app.post('/', jsonParser, function (req, res) {
  console.log("Request from:"+req.url);
  if (!req.body) return res.sendStatus(400);
  else console.log(req.body.roll_no);
});

app.listen(8013);
