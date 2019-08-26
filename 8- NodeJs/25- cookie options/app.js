const express = require('express');
const cookieParser = require('cookie-parser');

const port = process.env.PORT || 3000;
const app = express();
app.use(cookieParser());
// create a cookie 
app.get('/createCookie', (req, res) => {
    res.cookie('mortalCookie', {createDate: Date.now()}, {
        // expires:new Date(Date.now() + 10000) 
        maxAge:60000
        });
    res.send("one minute cookie has been saved");
});

// read a cookie
app.get('/readCookie', (req, res) => {
    if(req.cookies.mortalCookie){
        res.send("cookie created time: "+new Date(req.cookies.mortalCookie.createDate).toTimeString())
    }else{
        res.send("I can not recognize this cookie");
    }
});
// delete the cookie
app.get('/clearCookie', (req, res) => {
    res.clearCookie('mortalCookie');
    res.send('cookie is dead');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});

// https://www.tutorialspoint.com/expressjs/expressjs_cookies.htm