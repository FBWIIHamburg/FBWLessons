const MongoClient = require('mongodb').MongoClient;
const dbUrl = 'mongodb+srv://lion:jeny@cluster0-rmrmn.mongodb.net/test?retryWrites=true';
const dbName = 'prototypeDB';
function checkUserName(userName , callback) {
    (async function mongo() {
        let client;
        try {
            client = await MongoClient.connect(dbUrl, {
                useNewUrlParser: true
            });
            const db = client.db(dbName);
            const col = await db.collection('users');
            const user = await col.findOne({username: userName});
            client.close();
            console.log(user);
            if(user){
                callback(false);
            }else{
                callback(true);
            }
        } catch (error) {
            console.log(error.message);
            client.close();
            callback(false);
        }
    }());
  }

  module.exports = checkUserName;