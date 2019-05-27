const express = require('express');
const path = require('path');
 const { MongoClient } = require('mongodb');
const conf = require('./config');
const session = require('express-session');

const app = express();
const port = process.env.PORT || 3000;
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
    
  }));
// use this tow lines code so we can get posted data 
// using req.body
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, '/public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('login');
});
app.post('/login', (req, res) => {
const dbName = 'herokuwebDB';
(async function mongo(){
    let client;
try {
    client = await MongoClient.connect(conf.mongoURI, {useNewUrlParser: true});
    const db = client.db(dbName);
    const user = await db.collection('users').findOne(
        {
            username: req.body.lg_username,
            password:req.body.lg_password
        });
client.close();
if(user){
    req.session.user = user;
    res.redirect('/profile');
}
else{
    res.redirect('/error');
}
} catch (error) {
    res.send(error.message);
}
}())
    //console.log(req.body.lg_username, req.body.lg_password);
    //res.render('login');
});
app.get('/profile', (req, res) => {
    console.log(req.session.user);
    if(req.session.user){
    res.send('profile welcom '+req.session.user.username);
    }else{
        res.redirect('/');
    }
});
app.get('/error', (req, res) => {
    res.send('username or password is wrong');
});
app.get('/register', (req, res) =>{
    res.render('register');
});
app.post('/register', (req, res) =>{
    const dbName = 'herokuwebDB';
(async function mongo(){
    let client;
try {
    client = await MongoClient.connect(conf.mongoURI, {useNewUrlParser: true});
    const db = client.db(dbName);
    const user = await db.collection('users').insertOne(
        {
            username: req.body.reg_username,
            password:req.body.reg_password,
            email:req.body.reg_email,
            fullname:req.body.reg_fullname,
            gender:req.body.reg_gender
        });
client.close();
    res.redirect('/profile');

} catch (error) {
    res.send(error.message);
}
}())
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});
