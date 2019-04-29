var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport(
    {
host: 'smtp.gmail.com',
port: 465,
secure: true,
auth:{
    user:'ahmad.osman@digitalcareerinstitute.org',
    pass:'!qWdEfRg'
}
    }
);
exports.sendEmail = function (reciver , sender , subject , message,callback) {  
var emailOption = {
    from:sender,
    to:reciver,
    subject:subject,
    text : message
    
}
transporter.sendMail(emailOption,function (err , info) { 
    callback(err,info);
 });
}