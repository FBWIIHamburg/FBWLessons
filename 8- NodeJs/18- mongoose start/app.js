const express = require('express');
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;
let app = express();
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    birthdate: {
        type: Date,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength:8
    },
    married: {
        type: Boolean,
        required: true
    },
    verified: {
        type: Boolean,
        required: true
    }
});
let Users = mongoose.model('users', userSchema);
function checkConnection(){
    const checkPromise = new Promise((resolve, reject)=>{
        if(mongoose.connection.readyState != 1){
            reject("database is not connected");
        }
        else{
            resolve();
        }
    });
    return checkPromise;
}
app.get('/connect', (req, res)=>{
    if(mongoose.connection.readyState != 1){
mongoose.connect('mongodb://localhost:27017/mongooseDB',{
useNewUrlParser: true,
useCreateIndex: true
}).then(()=>{
    res.send('connected');
}).catch(error=>{
    res.send(error);
})
}else{
    res.send('connected');
}
});
app.get('/connectionstatus', (req, res)=>{
    res.send(mongoose.connection.readyState.toString());
})
app.get('/disconnect', (req, res) => {
    mongoose.disconnect().then(()=>{
        res.send("disconnected");
    }).catch(error=>{
        res.send(error);
    });
});

app.get('/addUser', (req, res) => {
    checkConnection().then(()=>{
        let newUser = new Users({
            fname: "Ahmad",
        lname: "Osman",
        username: "jenylion",
        birthdate: new Date(1986,2,2),
        password: "12345678",
        married: true,
        verified: false
        });
        newUser.save().then(savedUser=>{
            res.json(savedUser);
        }).catch(error=>{
            res.json(error);
        });
    }).catch(error=>{
        res.json(error);
    })
});

app.listen(port,()=>{
    console.log(`app is running in port ${port}`);
}); 

