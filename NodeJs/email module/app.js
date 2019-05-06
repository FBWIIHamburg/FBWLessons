var http = require('http');
var uc = require('upper-case');
var url = require('url');
var fs =require('fs');
var emailSender = require('./email-sender');
http.createServer(function (req , res ) { 
res.writeHead(200,{'content-type':'text/HTML'});
var myUrl = url.parse(req.url,true);
//res.end(uc('Hello World ')+'<br>'+myUrl.query.email);


if(myUrl.pathname=="/contact"){

        if(myUrl.query.name=="" || typeof(myUrl.query.name)=="undefined"){
            fs.readFile('contact.html',function (err , data) {  
                if(err){
                    res.end(err.stack);
                }else{
                    res.end(data);
                }
            });
        }else{
            emailSender.sendEmail("ahmad.osman@digitalcareerinstitute.org",myUrl.query.email,myUrl.query.subject,myUrl.query.message,function(blablaerr,someinfo){
    if(blablaerr)
    {
        res.end(blablaerr.stack);
    }else{
        res.writeHead(301,{'Location':'/contact'});
        res.end(someinfo.response+"<br>thank you "+myUrl.query.name+" we got your message and we will response soon" );
    }
 res.end();
            });
            
        }
    
}else{
   res.end("you are not in contact page"); 
}
 }).listen(3000);