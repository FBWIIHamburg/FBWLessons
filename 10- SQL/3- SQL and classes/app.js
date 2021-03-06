
const express = require('express');
const {Customer, Employee} = require('./controllers/classes');



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
app.get('/customerupdate', (req, res) => {
    Customer.getCustomerById(114).then(customer=>{
         customer.country = 'Germany';
         customer.city = 'Hamburg1';
         customer.save().then(data=>{
            res.json(data);
         }).catch(error=>{
            res.json(error);
         });
        
    }).catch(error=>{
        res.json(error);
    });

});
app.get('/customer', (req, res) => {
    Customer.getCustomerById(114).then(customer=>{
        Employee.getEmployeeById(customer.employee).then(employee=>{
            res.json(employee);
        }).catch(error=>{
            res.json(error);
        })
        
    }).catch(error=>{
        res.json(error);
    });

});

app.get('/employee/:id', (req, res) => {
Employee.getEmployeeById(req.params.id).then(employee=>{
    res.json(employee);
}).catch(error=>{
    res.json(error);
})
    
});
app.get('/allcustomers', (req, res) => {
    Customer.getAll().then(customers=>{
        res.json(customers);
    }).catch(error=>{
        res.json(error);
    });
});

app.get('/showpage/:data', (req, res) => {
    let pageNum = req.params.data.split(',')[0];
    let elementNum = req.params.data.split(',')[1];
    Customer.getPage(pageNum, elementNum).then(customers=>{
        res.json(customers);
    }).catch(error=>{
        res.json(error);
    })
    
});

app.get('/ordersViewer', (req, res) => {
    Customer.getCustomerById(114).then(customer=>{
        customer.getOrders().then(orders=>{
            res.send(JSON.stringify(customer) + '<br><br><br>' + JSON.stringify(orders));
        }).catch(error=>{
            res.send(error);
        });

    }).catch(error=>{
        res.json(error);

    });
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});