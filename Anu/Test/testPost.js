var request = require('request');

var options = {
  uri: 'http://localhost/rest/default/V1/carts/mine/items',
  method: 'POST',
  headers: {
        "Content-Type" : "application/json",
	"Authorization" : "Bearer wvxjrjmkq4v5uxowea4iym5jm4rncbmg"
        },
  json: {
  "Ballon": {
    "id" : "5",
    "sku": "ballon-1",
    "qty": 1,
    "quote_id": "4"
  }
}
};

request(options, function (error, response, body) {
  if (error) {
    console.log(body);
  }
  else{
	console.log(body);
  }
});
