const express = require('express');
const passport = require('passport');
const facebookStrategy = require('passport-facebook').Strategy;
const session = require('express-session');

const port = process.env.PORT || 3000;
const app = express();

passport.serializeUser(function(user, cb) {
    cb(null, user);
  });
  passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
  });

  app.use(express.urlencoded({extended:false}));
  app.use(session({
      secret: "halloya"
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  // create facebook strategy 
  const facestrategy = new facebookStrategy({
clientID: '386097498770497',
clientSecret: 'your secret',
callbackURL: '/answer'
  },
  function (accessToken, refreshToken, profile, cb) { 
      console.log("accessToken:"+accessToken);
      console.log("refreshToken:"+refreshToken);
      console.log("profile:"+profile);
      return cb(null, profile);
   }
  );
  passport.use(facestrategy);
app.get('/login', (req, res) => {
    res.sendFile(__dirname+"/login.html");
});
app.get('/facebooklogin', passport.authenticate('facebook'));
app.get('/answer',passport.authenticate('facebook',{
failureRedirect: '/login'
}),
(req, res)=>{
    res.redirect('/profile');
}
);
app.get('/profile', (req, res) => {
    res.json(req.session)
});
app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});