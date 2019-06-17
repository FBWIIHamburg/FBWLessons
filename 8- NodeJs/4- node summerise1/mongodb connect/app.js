const express = require('express');

const app = express();
const port = process.env.PORT || 5999;

const user = {
    username: 'Ali',
    password: 'osman1222222'
}


/////// connect to mongodb and insert
const MongoClient = require('mongodb').MongoClient;
const dbUrl = 'mongodb+srv://lion:jeny@cluster0-rmrmn.mongodb.net/test?retryWrites=true';
const dbName = 'prototypeDB';

const checkUser = require('./modules/checkUser');
app.get('/', (req, res) => {
    checkUser(user.username, (check)=>{
        if(check){
            (async function mongo() {
                let client;
                try {
                    client = await MongoClient.connect(dbUrl, {
                        useNewUrlParser: true
                    });
                    const db = client.db(dbName);
                    const response = await db.collection('users').insertOne(user);
                    res.send(response);
                } catch (error) {
                    res.send(error.message);
                }
                client.close();
            }());
        }
        else{
            res.send(`${user.username} is already exist please choos another one`);
        }
    });

    //res.send('we will connect to mongodb sooooooon');
});


/// show all data from database




app.get('/show', (req, res) => {
    (async function mongo() {
        let client;
        try {
            client = await MongoClient.connect(dbUrl, {
                useNewUrlParser: true
            });
            const db = client.db(dbName);
            const col = await db.collection('users');
            const users = await col.find({username: 'ahmad1'}).toArray();
            res.send(users);
        } catch (error) {
            res.send(error.message);
        }
        client.close();
    }());
});

/// show one data from database using username

app.get('/user', (req, res) => {
    (async function mongo() {
        let client;
        try {
            client = await MongoClient.connect(dbUrl, {
                useNewUrlParser: true
            });
            const db = client.db(dbName);
            const col = await db.collection('users');
            const user = await col.findOne({username: 'samer'});
            //res.send(user);
            if (user) {
                res.send(user);
            } else {
                res.send('user not exist');
            }


        } catch (error) {
            res.send(error.message);
        }
        client.close();

    }());

});



app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});