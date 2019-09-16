
const express = require('express');
const {Customer} = require('./controllers/classes');

const dotenv = require('dotenv');
dotenv.config();

const sql = require('./controllers/sql');
const app = express();
const port = process.env.PORT ;

let newCustomer = new Customer(1,'dci','Osman','Ahmad','123456', 'some address 1 ', '', 'Hamburg', 'Hamburg', '220099', 'Germany',null,5000, 'lion', '123456');

app.get('/testconnection', (req, res) => {
    sql.connect().then(()=>{
        res.send('connected');
    }).catch(error=>{
        res.send(error); 
    })
});
app.get('/customer', (req, res) => {
    Customer.getCustomerById(112).then(customer=>{
        res.json(customer.Fname);
    }).catch(error=>{
        res.json(error);
    });

});


app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});