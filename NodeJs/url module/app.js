var http = require('http');
var url = require('url');
var fs = require('fs');
http.createServer(function (req, res) { 
res.writeHead(200,{'content-type':'text/HTML'});
//res.write("Hello World Ahmad <br />");
var myUrl=url.parse(req.url,true);
var navi="";
fs.readFile('./navigation.html',function (err,navData) {  
    if (!err) {
    navi=navData;
    }


switch (myUrl.pathname) {
    case "/":
    case "/home":
    fs.readFile('./index.html', function (err, data) {
        if (!err) {
            res.end(data.toString().replace("navigation",navi));
        }
        else{
            res.end('404 file not found'); 
        }
    });
        break;
        case "/about":
        fs.readFile('./about.html', function (err, data) {
            if (!err) {
                res.end(data.toString().replace("navigation",navi));
            }
            else{
                res.end('404 file not found'); 
            }
        });

        break;
        case "/contact":
        if( typeof( myUrl.query.name)!=="undefined" && myUrl.query.name!=="" ){
                            var senderName = myUrl.query.name;
                            var senderEmail = myUrl.query.email;
                            var senderSubject = myUrl.query.subject;
                            var senderMessage = myUrl.query.message;
                            var responsHtml="<html>"+
                            "<head></head>"+
                            "<body>"+navi+"<h1>thank you "+senderName+" we got your message and we will response soon</h1></body>"+
                            "</html>";
                            res.end(responsHtml);
                        }else{
                            fs.readFile('./contact.html', function (err, data) {
                                if (!err) {
                                    res.end(data.toString().replace("navigation",navi));
                                }
                                else{
                                    res.end('404 file not found'); 
                                }
                            });
                        }

        break;
    default:
        res.end("404");
        break;
}
});
    // if (myUrl.pathname == "/" || myUrl.pathname == "/home") {

    //     fs.readFile('./index.html', function (err, data) {
    //         if (!err) {
    //             res.end(data.toString().replace("someData",myUrl.pathname));
    //         }
    //         else{
    //             res.end('404 file not found'); 
    //         }
    //     });
    // }
    // else{
    //     if ( myUrl.pathname == "/about") {
    //         fs.readFile('./about.html', function (err, data) {
    //             if (!err) {
    //                 res.end(data.toString().replace("someData",myUrl.pathname));
    //             }
    //             else{
    //                 res.end('404 file not found'); 
    //             }
    //         });
    //     }else{
    //         if ( myUrl.pathname == "/contact") {
    //             if( typeof( myUrl.query.name)!=="undefined" && myUrl.query.name!=="" ){
    //                 var senderName = myUrl.query.name;
    //                 var senderEmail = myUrl.query.email;
    //                 var senderSubject = myUrl.query.subject;
    //                 var senderMessage = myUrl.query.message;
    //                 var responsHtml="<html>"+
    //                 "<head></head>"+
    //                 "<body><h1>thank you "+senderName+" we got your message and we will response soon</h1></body>"+
    //                 "</html>";
    //                 res.end(responsHtml);
    //             }else{
    //                 fs.readFile('./contact.html', function (err, data) {
    //                     if (!err) {
    //                         res.end(data);
    //                     }
    //                     else{
    //                         res.end('404 file not found'); 
    //                     }
    //                 });
    //             }
                
    //         }else{
    //             res.end("404");
    //         }
    //     }
    // }
}
    ).listen(3000);
// myUrl.pathname
//myUrl.query.namejss
// req.headers.host
 