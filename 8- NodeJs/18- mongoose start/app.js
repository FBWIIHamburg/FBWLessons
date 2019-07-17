const express = require('express');
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;
let app = express();
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fname: String,
    lname: String,
    username: String,
    birthdate: Date,
    password: String,
    married: Boolean,
    verified: Boolean
});
let Users = mongoose.model('users', userSchema);

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
app.listen(port,()=>{
    console.log(`app is running in port ${port}`);
}); 

