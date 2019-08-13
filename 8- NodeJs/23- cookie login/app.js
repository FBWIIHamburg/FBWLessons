const express = require('express');
const cookieParser = require('cookie-parser');
const users = [{
    id:"123456789abcdef",
    username:"ahmad",
    pass:"145263"
},
{
    id:"123456789abcded",
    username:"ahmad1",
    pass:"145263"
}];
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    if(req.cookies.user){
        let check = false;
        users.forEach(user => {
            if(user.id.toString() == req.cookies.user.id.toString()){
                check = true;
            }
        });
        if(check){
            res.send("login true");
        }else{
            res.sendFile(__dirname+"/login.html")
        }
    }else{
        res.sendFile(__dirname+"/login.html");
    }
    
});

app.post('/login', (req, res) => {
    let userId = "";
    users.forEach(user => {
        if(user.username === req.body.username && user.pass === req.body.password){
            userId = user.id; 
        }
    });
    if(userId !==""){
        let sendText = "login true "
        if(req.body.rememberMe){
            sendText +="and want to be remembered";
            res.cookie('user',{id: userId})
        }
        res.send(sendText);
    }else{
        res.send("login error");
    }
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});


