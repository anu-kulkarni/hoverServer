var chai = require('chai');
var assert = chai.assert;    
var Magento2Client = require('magento2-rest-client').Magento2Client;
 
    var options = {
          'url': 'http://127.0.0.1/rest',
          'consumerKey': '01j3rsx0lpbqmwmt2aj13irw57x391cw',
          'consumerSecret': '5ft3ksasod7lj16b1v50qsyqw0x4w60e',
          'accessToken': 'oel7ghpvpqudwm4ojhh9v407r62fdhp5',
          'accessTokenSecret': 'f9jkak973jgnbqxydv7xwykh5k4eoxoj'
    };
    var client = Magento2Client(options);
	console.log(client.product.list()+"dkd");
    client.product.list()
        .then(function (product) {
            assert.equal(product.parentId , 1);
	
        });
