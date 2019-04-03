class Person{
    constructor(fName,lName,bYaer){
        this.firstName=fName;
        this.lastName=lName;
        this.birthYear=bYaer;
    }
    age(){
let date1=new Date();
return date1.getFullYear()-this.birthYear;
    }
    aboutMe(){
        console.log("I am "+this.firstName+" "+this.lastName+" and I am "+this.age()+" years old");
    }
}


class Trainer extends Person{
    constructor(tfName,tlName,tbYear,tSubject,twDays){
    super(tfName,tlName,tbYear);
    this.Subject=tSubject;
    this.workDays=twDays;
    }
    aboutMe(){
        console.log("I am "+this.firstName+" "+this.lastName+" and I am "+this.age()+" years old and I teach "+this.Subject+" for "+this.workDays+" days a week");
    }
}

class Participant extends Person{
    constructor(pfName,plName,pbYear,pClass,pLevel){
        super(pfName,plName,pbYear);
        this.Class=pClass;
        this.Level=pLevel;
    }
    aboutMe(){
        console.log("I am "+this.firstName+" "+this.lastName+" and I am "+this.age()+" years old and I attend in "+this.Class+" class and my level is "+this.Level);
    }
}

let someOne=new Person("Ali","Abbas",2000);
console.log(someOne.age());
let trainer1 = new Trainer("Ahmad","Osman",1986,"javascript",4);
let particpant1 = new Participant("Petros","Paulos",1992,"FBWIIHamburg",1);
console.log(trainer1.age());
console.log(particpant1.age());
particpant1.aboutMe();