const express = require('express');
const app = express();

// next two lines allow server side (backEnd) to recive data from clientside
// (fronEnd) using POST
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const port = process.env.PORT || 2000;

// api route
const stocksPrice = [
    {
        stockName: "bitcoin",
        stockPrice: 9000
    },
    {
        stockName: "ethereum",
        stockPrice: 200
    },
    {
        stockName: "xrp",
        stockPrice: 0.29
    }
];

app.post('/stocks', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");   
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
console.log(req.body.fname);
    res.json(stocksPrice);
});

app.get('/stocks', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");   
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    console.log(req.query.fname);
    res.json(stocksPrice);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});
