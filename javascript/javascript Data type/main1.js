// function without arguments and returns nothing

function sayHello(){
    console.log("Hello World");
}

//sayHello();

//function with arguments (parameters) and returns nothing

function doubler(num){
    console.log(num*2);
}

//doubler(10);


function pwoer4(num){
console.log(num**4);
}
//pwoer4(5);

//multiabler(3 , 6);

function multiabler(num1 , num2){
console.log(num1 * num2);
}


// multiabler(4 , 9);
// multiabler(6 , 4);
// multiabler(2 , 6);
// multiabler(66 , 2);


function circleArea(r ){
    console.log(Math.PI*r*r);

}
//circleArea(5 );
function areaCalculater(width , length){
console.log("the Area of the Room with "+width+" meter width and "+length+" meter height is "+width * length+" square meter");
}

//areaCalculater(10,15);
//areaCalculater(2,3);


// function return values

function multiable(num1,num2){
return (num1 * num2);
}

let someNum2=areaCalculater(3,5);
console.log(someNum2);
let someNum=multiable(2,3);
console.log(someNum);