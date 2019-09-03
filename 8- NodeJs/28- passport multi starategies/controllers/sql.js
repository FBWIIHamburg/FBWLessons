const mySql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();
const con = mySql.createConnection({
    host: process.env.mysqlhost,
    port: process.env.mysqlport,
    user: process.env.mysqluser,
    password: process.env.mysqlpassword,
    database: process.env.mysqldatabase
});
function connect() {
    const connectPromise = new Promise((resolve, reject)=>{
        if(con.state === 'disconnected'){
        con.connect(error=>{
            if(error){
                reject(error);
            }else{
                resolve();
            }  
        });
    }else{
        resolve();
    }
    });
    return connectPromise;
  }
function sqlQuery(query){
    const queryPromise = new Promise((resolve, reject)=>{
        connect().then(()=>{
            con.query(query,(error, result, fields)=>{
                if(error){
                    reject(error);
                }else{
                    resolve(result);
                }
            })
        }).catch(error=>{
            reject(error);
        })
    });
    return queryPromise;
    
}
module.exports = {
    connect,
    sqlQuery
}