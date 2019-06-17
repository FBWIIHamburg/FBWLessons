const express = require('express');


const app = express();

const port = process.env.PORT || 3000;
const subRout=express.Router();
const subsubRout=express.Router();



app.use('/test', subRout);
subRout.use('/mo',subsubRout);
subsubRout.route('/').get((req, res)=>{
    res.send("you are mo");
    });
subsubRout.route('/ali').get((req, res)=>{
    res.send("you are ali");
    });
subRout.route('/').get((req, res)=>{
    res.send("you are on test");
    });
subRout.route('/home').get((req, res)=>{
res.send("you are in Home");
});

app.get('/',(req, res)=>{
res.send("Hello World");
});
// app.get('/test1',(req, res)=>{
//     res.send("this is test1");
//     });
// app.get('/test1/test2',(req, res)=>{
//     res.send("this is test2");
//     });
app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});