var Person ={
    firstName : "Ahmad",
    lastName : "Osman",
    BirthYear : 1986,
    hair:"Brown",
    married:true,
    fullName:function() {
        return this.firstName+" "+this.lastName;
    },
    age:function(){
        let currentYear =new Date();
        console.log(currentYear);
        return currentYear.getFullYear()-this.BirthYear;
    },
    status:function(){
        if(this.married){
return "married";
        }else{
            return "single";
        }
    }
}

console.log(Person);

console.log(Person.firstName);
console.log(Person.fullName());
console.log(Person.age());
console.log(Person.status());