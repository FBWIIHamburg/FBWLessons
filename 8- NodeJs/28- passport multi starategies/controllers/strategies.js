const localStrategy = require('passport-local');
const facebookStrategy = require('passport-facebook').Strategy;
const {sqlQuery} = require('./sql');



const local = new localStrategy({
usernameField: "username",
passwordField: "pass"
},
function (username, password, done) {
sqlQuery(`select * from customers where username like '${username}' and password like '${password}'`).then(result=>{
if(result[0]){
done(null, result[0]);
}else{
    done(null, false, "Either username or password is wrong");
}
}).catch(error=>{
    done(null, false, "server error");
})





  }
);

const facebook = new facebookStrategy({
clientID: "100103064190379",
clientSecret: "1dcf2bdc0539b8ca2a77910e13334134",
callbackURL: "/answer",
profileFields:['email','photos', 'displayName','id']
},
function(accessToken, refreshToken, profile, cb){
    return cb(null, profile);
}
);

module.exports = {
    local,
    facebook
}