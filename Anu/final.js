var express= require('express');
var bodyParser = require('body-parser');

var app=express();
var jsonParser = bodyParser.json();

app.post('/two', jsonParser, function (req, res) {
  console.log("Request from:"+req.url);
  if (!req.body) return res.sendStatus(400);

  check_in_perm=require('./two');
  check_in_perm(req,res);

  });

  app.post('/four', jsonParser, function (req, res) {
    console.log("Request from:"+req.url);
    if (!req.body) return res.sendStatus(400);

    product_details_entry = require('./four');
    product_deails_entry(req,res);

  });


  app.post('/one', jsonParser, function (req, res) {
    console.log("Request from:"+req.url);
    if (!req.body) return res.sendStatus(400);

    deatils_input=require('./one');
    details_input(req,res);


  });


  app.post('/three', jsonParser, function (req, res) {
    console.log("Request from:"+req.url);
    if (!req.body) return res.sendStatus(400);

    check_in_temp=require('./three');
    check_in_temp(req,res);

  });

  app.post('/verify', jsonParser, function (req, res) {
    console.log("Request from:"+req.url);
    if (!req.body) return res.sendStatus(400);

    verify_email=require('./verify');
    verify_email(req, res);

  });

app.listen(8080);
