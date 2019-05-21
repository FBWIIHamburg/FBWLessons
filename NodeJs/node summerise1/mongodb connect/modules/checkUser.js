const MongoClient = require('mongodb').MongoClient;
const dbUrl = 'mongodb+srv://lion:jeny@cluster0-rmrmn.mongodb.net/test?retryWrites=true';
const dbName = 'prototypeDB';
function checkUserName(userName , done) {
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
                done(false);
            }else{
                done(true);
            }
        } catch (error) {
            console.log(error.message);
            client.close();
            done(false);
        }
    }());
  }

  module.exports = checkUserName;