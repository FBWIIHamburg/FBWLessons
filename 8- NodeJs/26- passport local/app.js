const express = require('express');
const app = express();
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local');
const sqlConnection = require('mysql');

const con = sqlConnection.createConnection({
    host:'remotemysql.com',
    port:3306,
    user:'uLGxSjBItc',
    password:'5bwzbUZgZk',
    database:'uLGxSjBItc'
});
function sqlConnect() { 
    const connectPromise = new Promise((resolve, reject)=>{
        if(con.state === 'disconnected'){
            con.connect(error=>{
                if(error){
                    reject(error);
                }else{
                    resolve();
                }
            })
        }else{
            resolve();
        }
    });
    return connectPromise;
 }

 function sqlQuery(query) { 
     const queryPromise = new Promise((resolve, reject)=>{
        sqlConnect().then(()=>{
            con.query(query,(error, result, fields)=>{
                if(error){
                    reject(error);
                }else{
                    resolve(result);
                }
            });
        }).catch(error=>{
            reject(error);
        });
     });
     return queryPromise;
  }

// passport needs body-parser package
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(session({ secret:'classyads' }));

// let passport save the user inside the seession after success login
passport.serializeUser(function(user, done) {
    done(null, user);
  });
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });
/////////////////

// initialize passport as a middleware
app.use(passport.initialize());

// passport needs express-session package
app.use(passport.session());


const port = process.env.PORT || 3000;

// 1- declaring the local strategy
const newLocalstrategy = new LocalStrategy({
    usernameField: 'blaname',
    passwordField: 'pass'
},
    function(username, password, done){
        sqlQuery(`select * from customers where username like '${username}' and password like '${password}' `).then(result=>{
if(result[0]){
    done(null,result[0]);
}else{
    done(null, false, 'Incorrect username or password');
}
        }).catch(error=>{
            done(null, false, error);
        })
    }
);

// 2- use last strategy by passport
passport.use(newLocalstrategy);

app.get('/login', (req, res) => {
    res.sendFile(__dirname+'/login.html');
});

// 3- use passport zas a midleware in login post rout
app.post('/login', passport.authenticate('local', { 
    failureRedirect: '/login' }),
function(req, res) {
  res.redirect('/success');
});
app.get('/success', (req, res) => {
    if(req.session.passport){
    res.send(req.session.passport.user);
    }else{
        res.redirect('/login');
    }
});
app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});
