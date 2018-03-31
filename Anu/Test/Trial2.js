var express= require('express');
var bodyParser = require('body-parser');

var app=express();
var jsonParser = bodyParser.json();

app.post('/rest/V1/integration/admin/token', jsonParser, function (req, res) {
  console.log("Request from:"+req.url);
  if (!req.body) return res.sendStatus(400);
	console.log(res);		

  });

