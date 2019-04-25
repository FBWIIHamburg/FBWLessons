var http = require('http');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
host: 'smtp.gmail.com',
port: 465,
secure: true,
auth:{
    user:'ahmad.osman@digitalcareerinstitute.org',
    pass:''
}
});
http.createServer(function(req , res){
    res.writeHead(200, {'content-type' : 'text/HTML'});
    var mailOptions = {
        from : 'somesender@sender.sender',
        to : 'ahalboob@gmail.com ',
        subject : 'some subject',
        text : "Hello How are you are you good"
      };
       transporter.sendMail(mailOptions,function (err,info) { 
          if (err) {
            res.end(err.stack);
          }
          else{
              res.end(info.response);
          }
        });
}).listen(3000);