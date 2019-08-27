const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const mySql = require('mysql');
const con = mySql.createConnection({
    host:'remotemysql.com',
    port:3306,
    user:'5HWPjk6aEi',
    password: '84PTSP5yCN',
    database:'5HWPjk6aEi'
});



app.get('/connect', (req, res) => {
    if(con.state === 'disconnected')
    {
        con.connect((error)=>{
            if(error){
                res.send(error);
            }
            else{
                res.send('connected');
            }
        });
    }else{
        res.send('already connected');
    }
});
app.get('/connectionstatus', (req, res) => {
    
    res.send(con.state);
});

app.get('/users', (req, res) => {
    if (con.state === 'authenticated') {
        con.query("select * from users ",(error, results, fields)=>{
            if(error){
                res.send(error);
            }else{
                res.send(results);
            }
        })
    }
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});