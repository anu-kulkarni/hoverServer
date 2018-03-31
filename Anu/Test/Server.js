var http=require('http')

var server=http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'application/json'});
  var myObj={
    bool:'no'
  }
  res.end(JSON.stringify(myObj));
});
server.listen(8080);
console.log("connect!");
