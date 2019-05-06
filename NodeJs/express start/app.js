const express = require('express');
const path = require('path');

const app = express();
app.get('/',function (req,res) { 
    // show pure text
    //res.send("Hello world");

    // show json object
    // let obj={name : 'Ahmad', lname:'Osman' };
    // res.json(obj);

    // show a file
    res.sendFile(path.join( __dirname, 'views/index.html'));
 });

 const port = process.env.PORT || 3000 ;
app.listen(port,function () {console.log(`Server is running on port ${port}`);  });