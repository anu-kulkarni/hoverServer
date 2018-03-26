var check_in_perm = function(req,res){

    var mail,pass;

    mail=req.body.mail;
    pass=req.body.password;

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "AstroAnu",
  database: "UpDataBase"
});

con.query("select * from `Retailer` where `Mail`= ? and `Password`= ? ", [mail,pass] , function(err, rows){
  if(err) {
    throw err;
  }
  else if(!rows.length){
    console.log("0 length");
    console.log(mail+" "+pass);
    var myObj={
      result : false ,
      in : 'two_false',
      e_mail : mail,
      password : pass
    }
    res.end(JSON.stringify(myObj));
  }
  else {
    setValue(rows);
  }
});

function setValue(value) {
    console.log("Found in permanent!");
    console.log(mail+" "+pass);
    var myObj={
      e_mail : mail,
      password : pass,
      result : true ,
      in : 'two_true'
    }
    res.end(JSON.stringify(myObj));
}


}
module.exports = check_in_perm;
