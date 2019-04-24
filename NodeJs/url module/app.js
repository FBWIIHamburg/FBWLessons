var http = require('http');
var url = require('url');
var fs = require('fs');
http.createServer(function (req, res) { 
res.writeHead(200,{'content-type':'text/HTML'});
//res.write("Hello World Ahmad <br />");
var myUrl=url.parse(req.url,true);
    if (myUrl.pathname == "/" || myUrl.pathname == "/home") {

        fs.readFile('./index.html', function (err, data) {
            if (!err) {
                res.end(data.toString().replace("someData",myUrl.pathname));
            }
            else{
                res.end('404 file not found'); 
            }
        });
    }
    else{
        if ( myUrl.pathname == "/about") {
            fs.readFile('./about.html', function (err, data) {
                if (!err) {
                    res.end(data.toString().replace("someData",myUrl.pathname));
                }
                else{
                    res.end('404 file not found'); 
                }
            });
        }else{
            if ( myUrl.pathname == "/contact") {
                fs.readFile('./contact.html', function (err, data) {
                    if (!err) {
                        res.end(data);
                    }
                    else{
                        res.end('404 file not found'); 
                    }
                });
            }else{
                res.end("404");
            }
        }
    }}).listen(3000);
// myUrl.pathname
//myUrl.query.namejss
// req.headers.host
 