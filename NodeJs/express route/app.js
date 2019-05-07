const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs');

// create a public folder for js and css files and maybe imgs
app.use(express.static(path.join(__dirname,'public')));
app.get('/', (req, res)=>{
    //res.send('Hello world');
    //res.sendFile(path.join(__dirname, '/src/views/index.html'));
    res.render('index');
});

app.listen(port, ()=>{console.log(`server start at port number ${port}`);});