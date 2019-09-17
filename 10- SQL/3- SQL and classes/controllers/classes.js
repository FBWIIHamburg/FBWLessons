const {sqlQuery} = require('./sql');

let appEmployees=[];

class Customer{
    constructor(id, companyname, lname,  fname, phone, address1, address2, city, state, postalcode, country, employee, creditLimit, username, password){
this.Id = id;
this.companyName = companyname;
this.Lname = lname; 
this.Fname = fname;
this.phone = phone;
this.address1 = address1;
this.address2 = address2;
this.city = city;
this.state = state;
this.postalCode = postalcode;
this.country = country;
this.employee = employee;
this.creditLimit = creditLimit;
this.userName = username;
this.password = password;
    }
getAddress(){
    return this.address1 + " " + this.address2 + " " + this.city + " " + this.state + " " + this.country;
}
save(){
    const savePromise = new Promise((resolve, reject)=>{
        sqlQuery(`UPDATE customers SET customerName='${this.companyName}',
        contactLastName='${this.Lname}',contactFirstName='${this.Fname}',
        phone='${this.phone}',
        addressLine1='${this.address1}',
        addressLine2='${this.address2}',
        city='${this.city}',
        state='${this.state}',
        postalCode='${this.postalCode}',
        country='${this.country}',
        salesRepEmployeeNumber=${this.employee},
        creditLimit=${this.creditLimit},
        username='${this.userName}',
        password='${this.password}' 
        WHERE customerNumber = ${this.Id}`).then(data=>{
            if(data.length == 0){
                reject(null);
            }else{
                resolve(data);
            }
        }).catch(error=>{
            reject(error);
        })
    });
    return savePromise

}
    //static method
    static getCustomerById(id){
        const queryPromise = new Promise((resolve, reject)=>{
            sqlQuery(`select * from customers where customerNumber = ${id} `).then(customer=>{
            
                if(customer.length == 0){
                    reject(null);
                }else{
                    let data = customer[0];
                    resolve( new Customer(data.customerNumber,
                        data.customerName,
                        data.contactLastName,
                        data.contactFirstName,
                        data.phone,
                        data.addressLine1,
                        data.addressLine2,
                        data.city,
                        data.state,
                        data.postalCode,
                        data.country,
                        data.salesRepEmployeeNumber,
                        data.creditLimit,
                        data.username,
                        data.password
                        ));
                }
            }).catch(error=>{
                reject(error);
            });
    });
    return queryPromise;

}
static getAll(){
const getPromise = new Promise((resolve, reject)=>{
sqlQuery('select * from customers').then(customers=>{
    let allCustomers = [];
    customers.forEach(customer => {
        allCustomers.push(
            new Customer(customer.customerNumber,
                customer.customerName,
                customer.contactLastName,
                customer.contactFirstName,
                customer.phone,
                customer.addressLine1,
                customer.addressLine2,
                customer.city,
                customer.state,
                customer.postalCode,
                customer.country,
                customer.salesRepEmployeeNumber,
                customer.creditLimit,
                customer.username,
                customer.password
                )
        );
    });
    resolve(allCustomers);

}).catch(error=>{
    reject(error);
})
});
return getPromise;
}
static getPage(pageNumber, elementsNumber){
    const getPromise = new Promise((resolve, reject)=>{
        let startNum = (pageNumber-1)*5;
    sqlQuery(`select * from customers limit ${startNum}, ${elementsNumber} `).then(customers=>{
        let allCustomers = [];
        customers.forEach(customer => {
            allCustomers.push(
                new Customer(customer.customerNumber,
                    customer.customerName,
                    customer.contactLastName,
                    customer.contactFirstName,
                    customer.phone,
                    customer.addressLine1,
                    customer.addressLine2,
                    customer.city,
                    customer.state,
                    customer.postalCode,
                    customer.country,
                    customer.salesRepEmployeeNumber,
                    customer.creditLimit,
                    customer.username,
                    customer.password
                    )
            );
        });
        resolve(allCustomers);
    
    }).catch(error=>{
        reject(error);
    })
    });
    return getPromise;
    }
}

class Employee{
    constructor(id, lname, fname, extension, email, officecode, bossid, jobtitle){
        this.Id = id;
        this.Lname = lname;
        this.Fname = fname;
        this.Extension = extension;
        this.Email = email;
        this.officeCode = officecode;
        this.bossId = bossid;
        this.jobTitle = jobtitle;
    }
    static getEmployeeById(id){
        
        const queryPromise = new Promise((resolve, reject)=>{
            let check = true;
            appEmployees.forEach(employee => {
                if(employee.Id == id){
                    check=false;
                    resolve(employee);
                }
            });
            if(check){
            sqlQuery(`select * from employees where employeeNumber = ${id} `).then(employee=>{
            
                if(employee.length == 0){
                    reject(null);
                }else{
                    let data = employee[0];
                    let newEmployee = new Employee(data.employeeNumber,
                        data.lastName,
                        data.firstName,
                        data.extension,
                        data.email,
                        data.officeCode,
                        data.reportsTo,
                        data.jobTitle
                        )
                    appEmployees.push(newEmployee)
                    resolve(newEmployee );
                }
            }).catch(error=>{
                reject(error);
            });
        }
    });
    return queryPromise;
    }
}

module.exports={
    Customer,
    Employee
}