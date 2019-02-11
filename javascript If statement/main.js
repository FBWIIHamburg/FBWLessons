
//standerd if statement
//let someVar = 5;

// if(someVar>6){
// console.log("it is true");
// }


// if else statement
// let someVar = 11;

// if(someVar>3  ){
//     console.log("it is true");
// }
// else{
//     console.log("it is false");
// }


//If statement with AND
// let someVar = 11;

// if(someVar>3 && someVar<10 ){
//     console.log("it is true");
// }
// else{
//     console.log("it is false");
// }


// if statement with OR
let someVar = 4;

if(someVar>10 || someVar<20 ){
    console.log("it is true");
}
else{
    console.log("it is false");
}


function comp(x,y){
if (x>y) {
    console.log("the first is greater than the second");
   
} else if(x==y) {
    console.log("the Second is equal the First");
}else{
    console.log("the Second is greater than the First");
}
}

comp(5,1);

function gradeChecker(x){
    if(x>90 && x<=100)
    {
        console.log("Excellent");
    }
    else if(x>80 && x<=90){
        console.log("Very good");
    }else if(x>70 && x<=80){
        console.log("Good");
    }else if(x>60 && x<=70){
        console.log("Pass");
    }else if(x>100){
        console.log("out of range");
    }else{
        console.log("Failed");
    }
}
gradeChecker(200);