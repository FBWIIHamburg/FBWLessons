const express = require('express');
const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'updatetestDB';
const app = express();
app.get('/', (req, res)=>{
    (async function mongo(){
        let client;
        try {
            client = await MongoClient.connect(url,{useNewUrlParser: true});
        const db = client.db(dbName);
        const response =  await db.collection('users').insertOne({
            username: 'admin',
            password: 'pass'
        });
        res.send(response);
        } catch (error) {
            res.send(error.message);
        }
client.close();
    }())
});

app.get('/update', (req, res)=>{
    (async function mongo(){
        let client;
        try {
            client = await MongoClient.connect(url , { useNewUrlParser:true});
            const db = client.db(dbName);
            //const response = db.collection('users').updateOne(<filter>, <update>);
            const response = await db.collection('users').updateOne({
                username:'admin'
            },
            {
                $set: {username: 'ahmad'}
            }
            );
            res.send(response);
        } catch (error) {
            res.send(error.message);
        }
    }())
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});
