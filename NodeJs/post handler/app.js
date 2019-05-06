const http = require('http');
const url = require('url');
const fs = require('fs');


http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' });
  const myUrl = url.parse(req.url, true);
  if (myUrl.pathname === '/contact') {
    if (req.method === 'POST') {
      res.end( 'this is a post request');
    } else if (typeof (myUrl.query.name) !== 'undefined' && myUrl.query.name !== '') {
      res.end(`${myUrl.query.name}<br>${myUrl.query.email}<br>${myUrl.query.subject}<br>${myUrl.query.message}`);
    } else {
      fs.readFile('contact.html', (err, data) => {
        if (err) {
          res.writeHead(404, { 'content-type': 'text/html' });
          res.end('404 error in showing the file');
        } else {
          res.end(data);
        }
      });
    }
    // res.end('you are in the contact page');
  } else {
    res.end('you are not in the contact page');
  }
}).listen(3000);
