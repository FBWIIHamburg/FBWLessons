const {sqlQuery} = require('./sql');

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
}


module.exports={
    Customer
}