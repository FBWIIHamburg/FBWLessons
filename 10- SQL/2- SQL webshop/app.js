
const express = require('express');

const dotenv = require('dotenv');
dotenv.config();

const sql = require('./controllers/sql');
const app = express();
const port = process.env.PORT ;

app.get('/testconnection', (req, res) => {
    sql.connect().then(()=>{
        res.send('connected');
    }).catch(error=>{
        res.send(error); 
    })
});
app.get('/customers', (req, res) => {
    //get data orderd using cusomername either DESC or ASC 
    // sql.sqlQuery('select customerName from customers order by customerName DESC').then(result=>{
        sql.sqlQuery('select customerName from customers ').then(result=>{
            let somArr = [];
        let content = "";
        result.forEach(element => {
            somArr.push(element.customerName);
        });
        somArr.sort();
        somArr.reverse();
        somArr.forEach(element => {
             content +=element+ '<br>';
        });
        res.send(content);
    }).catch(error=>{
        res.send(error);
    });
})
;
// show customers with name begin with A
app.get('/customers1', (req, res) => {
    let content = "";
    sql.sqlQuery("select customerName from customers WHERE customerName LIKE 'A%'").then(result=>{
        result.forEach(element => {
            content +=element.customerName+ '<br>';
       });
       res.send(content);
    }).catch(error=>{
        res.send(error);
    })
});
app.get('/customers1', (req, res) => {
    let content = "";
    sql.sqlQuery("select customerName from customers WHERE customerName LIKE 'A%'").then(result=>{
        result.forEach(element => {
            content +=element.customerName+ '<br>';
       });
       res.send(content);
    }).catch(error=>{
        res.send(error);
    })
});

// show customer full name
app.get('/customers2', (req, res) => {
    let content = "";
    sql.sqlQuery("select concat (contactFirstName , ' ' , contactLastName) as CustomerName  from customers ").then(result=>{
        result.forEach(element => {
            content +=element.CustomerName+ '<br>';
       });
       res.send(content);
    }).catch(error=>{
        res.send(error);
    })
});


// show customer full name from USA
app.get('/customers3', (req, res) => {
    let content = "";
    sql.sqlQuery("select concat (contactFirstName , ' ' , contactLastName) as CustomerName  from customers where country like 'USA' ").then(result=>{
        result.forEach(element => {
            content +=element.CustomerName+ '<br>';
       });
       res.send(content);
    }).catch(error=>{
        res.send(error);
    })
});


// show orders number which have been purchased in 2003 february
app.get('/customers4', (req, res) => {
    let content = "";
    sql.sqlQuery("select orderNumber from orders where orderDate between '2003-02-01' and '2003-02-28'").then(result=>{
        result.forEach(element => {
            content +=element.orderNumber+ '<br>';
       });
       res.send(content);
    }).catch(error=>{
        res.send(error);
    })
});

// show sum payments from USA in spicfice month 
app.get('/customers5', (req, res) => {
    let content = "";
    sql.sqlQuery("select sum(payments.amount) as total from payments"+
     "inner join customers on customers.customerNumber = "+
     "payments.customerNumber where customers.country like 'USA' "+
     "and payments.paymentDate between '2003-01-01' and '2003-01-30' ").then(result=>{
        result.forEach(element => {
            content +=element.total+ '<br>';
       });
       res.send(content);
    }).catch(error=>{
        res.send(error);
    })
});
app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});