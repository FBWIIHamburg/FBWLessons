const express = require('express');

const app = express();
const port = process.env.PORt || 4000;


// we need to use path package to prevent url errors
const path = require('path');


/////// set veiw engine setting
app.set('view engine', 'ejs');
//app.set('views', './views');
app.set('views', path.join(__dirname, './views'));
////// finish set veiw engine setting

/////// set public folder 
app.use(express.static(path.join(__dirname, '/public')));
////// finish set public folder 

app.get('/', (req, res) => {
    //res.send('we will show html page soon');
    let person = {
        firstname: 'Ahmad',
        lastname: 'Osman',
        job: 'back end guy'
    };
    res.render('index', {
        person
    });
});
app.get('/people', (req, res) => {
    let people = [{
            firstname: 'Petros',
            lastname: 'Paulos',
            job: 'developer'
        },
        {
            firstname: 'Ahmad',
            lastname: 'Osman',
            job: 'back end guy'
        },
        {
            firstname: 'Farouq',
            lastname: 'Fazly',
            job: 'Extensions expert'
        }, {
            firstname: 'Alperen',
            lastname: 'Ozkan',
            job: 'research expert'
        }
    ];
    res.render('Forindex', { people });
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});