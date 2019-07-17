const express = require('express');
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;
let app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

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
        minlength: 8,
        maxlength: 10
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

function checkConnection() {
    const checkPromise = new Promise((resolve, reject) => {
        if (mongoose.connection.readyState != 1) {
            mongoose.connect('mongodb://localhost:27017/mongooseDB', {
                useNewUrlParser: true,
                useCreateIndex: true
            }).then(()=>{
                resolve();
            }).catch(error=>{
                reject("database is not connected");
            });
            
        } else {
            resolve();
        }
    });
    return checkPromise;
}
app.get('/connect', (req, res) => {
    if (mongoose.connection.readyState != 1) {
        mongoose.connect('mongodb://localhost:27017/mongooseDB', {
            useNewUrlParser: true,
            useCreateIndex: true
        }).then(() => {
            res.send('connected');
        }).catch(error => {
            res.send(error);
        })
    } else {
        res.send('connected');
    }
});
app.get('/connectionstatus', (req, res) => {
    res.send(mongoose.connection.readyState.toString());
})
app.get('/disconnect', (req, res) => {
    mongoose.disconnect().then(() => {
        res.send("disconnected");
    }).catch(error => {
        res.send(error);
    });
});

app.get('/addUser', (req, res) => {
    checkConnection().then(() => {
        let newUser = new Users({
            fname: "Ahmad",
            lname: "Osman",
            username: "cooluser",
            birthdate: new Date(1986, 2, 2),
            password: "12345678",
            married: true,
            verified: false
        });
        newUser.save().then(savedUser => {
            res.json(savedUser);
        }).catch(error => {
            res.json(error);
        });
    }).catch(error => {
        res.json(error);
    })
});



app.get('/updateUser', (req, res) => {
    checkConnection().then(()=>{


        Users.updateOne({_id:"5d2ef39e5825d21066b529d2"},{username: "cooluser", lname:"SomeLname3"}).then(updatedUser=>{
            res.json(updatedUser);
        }).catch(error=>{
            res.json(error);
        });
 

    }).catch(error=>{
        res.json(error);
    })
});
app.get('/login', (req, res) => {
    res.sendFile(__dirname+"/login.html");
});
app.post('/login', (req, res) => {
    checkConnection().then(()=>{
Users.findOne({
    username: req.body.username,
    password: req.body.password
}).then(result=>{
    if(result){
        res.send("welcom "+result.fname);
    }else{
        res.send("go a way");
    }
    
}).catch(error=>{
    res.json(error);
})

    }).catch(error=>{
        res.send(error);
    })
});
app.get('/loginApi', (req, res) => {
    res.sendFile(__dirname+"/loginApi.html");
});
app.post('/loginApi', (req, res) => {
    res.json({dumy:"I am dummy",
    student: "are sleepy"
});
});
app.listen(port, () => {
    console.log(`app is running in port ${port}`);
});