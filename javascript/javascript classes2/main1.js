class Animal{
    constructor(name){
        this.name=name;
    }
    speak(){
        console.log(this.name+" makes a sound");
    }
}

class Lion extends Animal{
    constructor(name,color){
        super(name);
        this.color=color;
    }
    speak(){
        console.log(this.name+" makes a roar");
    }
}
let someLion=new Lion("king","white");
someLion.speak();
console.log(someLion.color);