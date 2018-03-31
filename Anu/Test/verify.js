var verify_email = function(req, res){

    console.log(req.body.mail);
    var mail_id= 'be15f05f036@geca.ac.in';

    var validator = require('validator');

    var isValid = validator.isEmail(mail_id); //=> true

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var code=getRandomInt(10000,99999);
if(isValid){
	var nodemailer = require('nodemailer');


	var transporter = nodemailer.createTransport({
  	service: 'gmail',
  	auth: {
    		user: 'kulkarni10aniket@gmail.com',
    		pass: 'astronomy1997'
  		}
	});

	var mailOptions = {
  		from: 'kulkarni10aniket@gmail.com',
  		to: mail_id ,
  		subject: 'Email authentication from Aniket!',
  		text: 'Authentication code is : '+ code +'.'
	};

	transporter.sendMail(mailOptions, function(error, info){
  		if (error) {
    		console.log(error);
  		} else {
    		console.log('Email sent: ' + info.response);
  		}
	});
  myObj={
    codeRequired : code
  }
  res.end(JSON.stringify(myObj));
}
else{
  myObj={
    result: false
  }
  res.end(JSON.stringify(myObj));
}

}

module.exports=verify_email;
