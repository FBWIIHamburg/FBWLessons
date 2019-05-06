var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport(
    {
host: 'smtp.gmail.com',
port: 465,
secure: true,
auth:{
    user:'ahmad.osman@digitalcareerinstitute.org',
    pass:'!q2w3e4r5t6y7u8I'
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