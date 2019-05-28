const express = require('express');
const multer = require('multer');

const app = express();
const port = process.env.PORT || 3000;
app.use(express.urlencoded({extended: false}));


app.get('/', (req, res) => {
    //res.send('upload file form will be shown here');
    res.sendFile(__dirname + '/main.html');
});

app.post('/uploadfile', (req, res) => {
    res.send(req.body);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});