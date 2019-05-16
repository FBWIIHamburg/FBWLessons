const express = require('express');
const  MongoClient  = require('mongodb').MongoClient;

var mainRouter = express.Router();



    
    mainRouter.get('/',(req, res)=>{
        //res.send('dfdfdfdf');
const url = 'mongodb://localhost:27017';
const dbName = 'tastyApp';
(async function mongo(){
let client;
try {
    client = await MongoClient.connect(url,{useNewUrlParser: true});
    const db = client.db(dbName);
    const col = await db.collection('dishes');
    const food = await col.find().toArray();
    let mainFood =[];
    let dessertFood =[];
    let drinksFood =[];
    for (let i = 0; i < food.length; i++) {
        if(food[i].category=='main'){
            mainFood.push(food[i]);
        }else if(food[i].category=='dessert'){
            dessertFood.push(food[i]);
        }
        else if(food[i].category=='drinks'){
            drinksFood.push(food[i]);
        }
    }
    res.render('index',{mainFood, dessertFood, drinksFood});
} catch (error) {
    res.send(error.message);
}
client.close();
}()); 
    });
    module.exports=mainRouter;