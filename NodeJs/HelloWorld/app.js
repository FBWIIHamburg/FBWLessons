var http =require('http');
var dt=require('./getdate');


http.createServer(function(req,res){
    var content="";
    var resNum=200;
if(req.url=="/home"){
    content="welcome Home";
}else
if(req.url=="/about"){
    content="this is about me";
}else
if(req.url=="/contact"){
    content="here you can contact me";
}else
{
    content="no page 404";
    resNum=404;
}
res.writeHead(resNum,{'content-Type':'text/HTML'});
// res.end('hello world Ahmad Osman '+ dt.myDate()+'<br /><h1>'+req.url+'</h1>');
res.end('<h1>'+content+'</h1>');
}).listen(3000);
console.log("Server is running on port 3000");