const localStrategy = require('passport-local');
const facebookStrategy = require('passport-facebook').Strategy;

const user = {
    name: "ahmad",
    pass: "123456"
}

const local = new localStrategy({
usernameField: "username",
passwordField: "pass"
},
function (username, password, done) {
if(username === user.name && password === user.pass){
    done(null, user);
}else{
    done(null, false, "Either username or password is wrong");
}
  }
);

const facebook = new facebookStrategy({
clientID: "your_client_Id",
clientSecret: "your_client_secret",
callbackURL: "/answer"
},
function(accessToken, refreshToken, profile, cb){
    return cb(null, profile);
}
);

module.exports = {
    local,
    facebook
}