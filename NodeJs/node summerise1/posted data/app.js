const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;


app.set('views',path.join(__dirname, '/views'));
app.set('view engine', 'ejs');




/////// get posted data using body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
////// finish get posted data using body parser



app.get('/profile', (req, res) => {
    // res.send('some page');
    res.send('youare in your profile');
});
app.get('/', (req, res) => {
    // res.send('some page');
    res.render('index');
});
app.post('/', (req, res) => {
    let user = {
        name: 'ahmad',
        pass: '1234'
    }
    if(req.body.username === user.name && req.body.password === user.pass){
    //res.send('welcom');
    res.redirect('/profile');
    }else{
        res.send('try again');
    }
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});