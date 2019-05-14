const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs');
const mainRouter = require('./src/routes/mainRouter');
app.use('/', mainRouter);
// app.get('/', (req, res)=>{
//     res.end("hello");
//     });//
app.listen(port,()=>{console.log(`app is running on port ${port}`);});