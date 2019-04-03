function calc(op,num1,num2){
    switch (op){
        case "+":
        return num1+num2;
        break;
        case "-":
        return num1-num2;
        break;
        case "*":
        return num1*num2;
        break;
        case "/":
        return(num2==0?"you can not divid on 0, Idiot!":num1/num2);
        // if(num2==0)
        // {
        //     return "you can not divid on 0, Idiot!"
        // }
        // else{
        //     return num1/num2;
        // }
        break;
        case "^":
        return num1**num2;
        break;
        default:
        return "This operation is not supported"
        break;
    }
}

//console.log(calc("^",9,-0.5));
// for(let i = 1; i<=100 ; i++ ){
//     console.log(i**2);
// }

// let i =1;
// while (i<=100) {
    
//     console.log(i**2);
//     i++;
// }

function isPrime(num){
for(let i = 2 ; i < num ; i++){
     if(num % i == 0){
         return false;
     }
}
return true;
}

//console.log(isPrime(101));
for(let i = 1 ; i<=100 ; i++){
    //console.log(isPrime(i));
    if(isPrime(i)){
        console.log(i);
    }
}