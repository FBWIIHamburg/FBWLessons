const express = require('express');
const session = require('express-session');
const app = express();


//install express session
//npm install express-session

const port = process.env.PORT || 4000;
app.use(session({ secret:'classyads' }));

app.get('/', (req, res) => {
    res.send('I am a page without session');
});
app.get('/login', (req, res) => {
    req.session.ahmadLogin=true;
    req.session.username='ahmad';
    res.send('you are login you can go to <a href="/admin">admin panel</a>');
}); 
app.get('/logout', (req, res) => {
    req.session.destroy();
    res.send('you are out can you try to go to  <a href="/admin">admin panel</a>');
}); 
app.get('/admin', (req, res) => {
    if(req.session.ahmadLogin===true){
        res.send(`welcom ${req.session.username} you are on admin panel`);
    }
    else{
        res.redirect('/');
    } 
});
app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});