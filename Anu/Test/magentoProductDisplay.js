var magentoDisplayProduct = function(req,res){

"use strict";

var request = require('request');

var options1 = {
  uri: 'http://localhost/rest/V1/integration/admin/token',
  method: 'POST',
  json: {
    username : "aniket",
    password : "AstroAnu123"
  }
};

request(options1, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
    var tok=body;


	
const Magento2 = require('node-magento2');

//instantiate the client object
const options = {
  authentication: {
    integration: {
      access_token: tok
    }
  }
}



const mageClient = new Magento2('http://localhost', options)

//basic usage
mageClient.init()
mageClient.get('/V1/products', {searchCriteria: {currentPage:'1'}}) //Get a list of all products
.then(products => {
    //do something with the returned product data
    console.log(products);
	
	res.end(JSON.stringify(products));
  })



  }
});





}
module.exports=magentoDisplayProduct;
