const express = require('express');

const app = express();
const port = process.env.PORt || 4000;

app.get('/', function (req, res) {
    res.send('Hello World');
});
// send variable to a route from App
const aboutRoutes = require('./routes/aboutRoutes');
app.use('/aboutus', aboutRoutes);

const shownameRoutes = require('./routes/shownameRoutes');
app.use('/showname', shownameRoutes('ahmad'));


app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});