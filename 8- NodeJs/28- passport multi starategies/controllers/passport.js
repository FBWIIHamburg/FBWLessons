const passport = require('passport');
const {facebook , local} = require('./strategies');

passport.serializeUser((user, done)=>{
    done(null, user);
});
passport.deserializeUser((user, done)=>{
    done(null, user);
});
passport.use(local);
passport.use(facebook);

module.exports = {
passport
};