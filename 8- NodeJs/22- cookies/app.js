const express = require('express');
const coockieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 4000;

app.use(coockieParser());

app.get('/', (req, res) => {
    res.send('Welcome to Cookies');
});


let user = {
    username:"blabla@blabla.bla",
    userid:"1234567894569874"
}
app.get('/savecookie', (req, res) => {
    res.cookie("userData1", user);
    res.send("cookie has been saved");
});
app.get('/getcookie', (req, res) => {
    console.log(req.cookies.userData.username);
    res.send(req.cookies.userData.username);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});