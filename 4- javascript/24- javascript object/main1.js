function Person(first,last,birth,hair,ismarried){
    this.firstName=first;
    this.lastName=last;
    this.birthDate=birth;
    this.hair=hair;
    this.married=ismarried;
    this.fullName=function(){
        return this.firstName+" "+ this.lastName;
    }
    this.status=function(){
//return (this.married?"Married":"Single");
if(this.married=="widow"){
return "widow";
}
return "Single";

    }
}


let trainer = new Person("Ahmad","Osman",1986,"brown","widow");
let participant1 = new Person("Alperen","Ozkan",1984,"black",true);
let participant2 = new Person("Pettros","Paolos",1992,"black",false);


console.log(trainer.fullName());
console.log(participant1.fullName());
console.log(participant2.fullName());
console.log(participant2.status());