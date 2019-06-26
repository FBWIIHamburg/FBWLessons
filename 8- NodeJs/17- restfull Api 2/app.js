const express = require('express');

const port = process.env.PORT || 3000;
const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res)=>{
res.sendFile(__dirname + '/start.html');
});

app.post('/', (req, res)=>{
   // console.log(req.body);

    res.json(req.body.Fname+' '+req.body.Lname);
    });


app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});