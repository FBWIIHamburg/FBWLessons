const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/',(req, res)=>{
    

    res.sendFile(__dirname+'/renderer.html');
});
app.post('/counter',(req, res)=>{
    if(global.someVar){
        global.someVar = global.someVar + 1; 
    }else{
        global.someVar = 1;
    }
    res.json(global.someVar);
});
app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});