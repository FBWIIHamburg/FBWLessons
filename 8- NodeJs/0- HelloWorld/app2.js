var http =require('http');
var url=require('url');
var fs = require('fs');


http.createServer(function(req,res){
    fs.readFile('index.html',function (err,data) { 

        res.writeHead(200,{'content-Type':'text/HTML'});
        //var parameters = url.parse(req.url,true).query;
        res.write(data);
        res.end();
     });


}).listen(3000);
console.log("Server is running on port 3000");