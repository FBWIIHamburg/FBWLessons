function helloWorld(lang){
if(lang=="ar"){
    console.log("مرحبا يا عالم");
}else if(lang=="en"){
    console.log("Hello world");
}else if(lang=="de"){
    console.log("Hallo welt");
} else{
    console.log("this languageis not supported");
}
}
helloWorld("en"); 

function calculate (num,animalName){
    if (num==1) {
        return "I have "+num+" "+animalName;
    } else if(num>1) {
        return "I have "+num+" "+animalName+"s";
    }else{
    return "Wrong Number";
    
    }
}
let theSentence = calculate(0,"cat");
console.log(theSentence);
//console.log(calculate(1,"cat"));


function noneReturnfun(somePar){
console.log("the parameter is "+somePar);
}

function Returnfun(somePar){
    console.log("the parameter is "+somePar);
    return (somePar+2);
    }
let someVar = Returnfun(5);
console.log(someVar);