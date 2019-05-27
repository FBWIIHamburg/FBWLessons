const express = require('express');
const path = require('path');
 const { MongoClient } = require('mongodb');
const conf = require('./config');

const app = express();
const port = process.env.PORT || 3000;

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
    res.send('profile welcom');
});
app.get('/error', (req, res) => {
    res.send('username or password is wrong');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});
