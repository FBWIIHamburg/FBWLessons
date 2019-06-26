const express = require('express');
const {MongoClient} = require('mongodb');
//const MongoClient = require('mongodb').MongoClient;

const port = process.env.PORT || 4000;

const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.get('/',(req, res)=>{
// const obj = {
//     id: '123456',
//     username: 'lion',
//     birthdate:{
//         year: '1986',
//         monthe: 'feb',
//         day: '2'
//     }
// }


res.sendFile(__dirname+'/index.html');
});

app.post('/checkdbConnection', (req, res)=>{
    //req.body.connString
const dbUrl = req.body.connString;
(async function mongo(){
    let client;
    try {
        client = await MongoClient.connect(dbUrl,{useNewUrlParser: true});
        client.close();
        res.json(1);
    } catch (error) {
        res.json(0);
    }

}())


});



app.listen(port,()=>{
console.log(`server is running on port ${port}`);
});