const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const dishesRoutes = express.Router();

dishesRoutes.route('/:id').get((req, res)=>{
const url = 'mongodb://localhost:27017';
const dbName = 'tastyApp';
const id = req.params.id;
(async function mongo() {
let client;
try {
    client = await MongoClient.connect(url, { useNewUrlParser: true });
    const db = client.db(dbName);
    const col = await db.collection('dishes');
    const dish = await col.findOne({ _id: new ObjectID(id)});
    res.render('dish', { dish });
} catch (error) {
    res.send(error.message);
}
  }())
});

module.exports = dishesRoutes;