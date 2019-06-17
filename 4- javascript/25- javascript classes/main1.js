class Person{
    
    constructor(fName,lName,age){
        this.firstName=fName;
        this.lastName=lName;
        this.Age=age;
        this._married=false;
    }
     

get married(){
    return this._married;
}
set married(value){
this._married=value;
}


    fullName=function(){
return this.firstName+" "+this.lastName;
    }
    aboutMe=function(param){
if(param=="f"){
    return "I am "+this.firstName+" and I am "+(this._married?"married":"single")+" and I have two kids"
}else if(param=="j"){
    return "I am a web developer ";
}
    }
}

let trainer=new Person("ahmad","osman",33);
trainer.married=true;
console.log(trainer.aboutMe("f"));
let participant1=new Person("Petros","Paulos",27);
participant1.married=false;
console.log(participant1.aboutMe("f"));
//trainer.married=true;
//console.log(trainer._married);