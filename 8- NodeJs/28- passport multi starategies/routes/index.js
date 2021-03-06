var express = require('express');
var router = express.Router();
const {passport} = require('../controllers/passport');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Passport Login' });
});
router.post('/',passport.authenticate('local',{
  failureRedirect:'/'
}),
function(req, res){
  res.redirect('/success');
}
);
router.get('/success',(req, res)=>{
  if(req.session.passport){
    res.send(req.session.passport.user);
  }else{
    res.redirect('/');
  }
});

router.get('/facebooklogin', passport.authenticate('facebook',{scope:'email'}));
router.get('/answer', passport.authenticate('facebook',{
  failureRedirect: '/'
}),
function (req,res) {
  res.redirect('/success');
  }
);
module.exports = router;
