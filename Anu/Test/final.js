var express= require('express');
var bodyParser = require('body-parser');

var app=express();
var jsonParser = bodyParser.json();

app.post('/check_in_perm', jsonParser, function (req, res) {
  console.log("Request from:"+req.url);
  if (!req.body) return res.sendStatus(400);

  check_in_perm=require('./two');
  check_in_perm(req,res);

  });

  app.post('/add_product', jsonParser, function (req, res) {
    console.log("Request from:"+req.url);
    if (!req.body) return res.sendStatus(400);

    product_details_entry = require('./four');
    product_deails_entry(req,res);

  });


  app.post('/add_retailer_info', jsonParser, function (req, res) {
    console.log("Request from:"+req.url);
    if (!req.body) return res.sendStatus(400);

    deatils_input=require('./one');
    details_input(req,res);


  });


  app.post('/check_in_temp', jsonParser, function (req, res) {
    console.log("Request from:"+req.url);
    if (!req.body) return res.sendStatus(400);

    check_in_temp=require('./three');
    check_in_temp(req,res);

  });

  app.post('/verify_email_id', jsonParser, function (req, res) {
    console.log("Request from:"+req.url);
    if (!req.body) return res.sendStatus(400);

    verify_email=require('./verify');
    verify_email(req, res);

  });

  app.post('/magento_product_display', jsonParser, function (req, res) {
    console.log("Request from:"+req.url);
    if (!req.body) return res.sendStatus(400);

    magentoDisplayProduct = require('./magentoProductDisplay');
    magentoDisplayProduct(req,res);

  });

    app.post('/magento_product_add', jsonParser, function (req, res) {
    console.log("Request from:"+req.url);
    if (!req.body) return res.sendStatus(400);

    magentoAddProduct = require('./magentoProductAdd');
    magentoAddProduct(req,res);

  });
  
    app.post('/magento_product_update', jsonParser, function (req, res) {
    console.log("Request from:"+req.url);
    if (!req.body) return res.sendStatus(400);

    magentoUpdateProduct = require('./magentoProductUpdate');
    magentoUpdateProduct(req,res);

  });

  


app.listen(8080);
