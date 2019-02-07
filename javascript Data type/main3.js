function divider(num1 , num2){

return (num1 / num2);

}

// console.log(divider(10,5));


//calling a function inside another function
function percentCalc(n1 , n2 ){
    console.log(divider(n1 , n2) * 100 + "%");
}

//percentCalc(59 , 60);



function areaCalc(width , length){
    return (width * length);
}

console.log(areaCalc(10,20));//

function areaCalc3d(X,Y,Z){
//return(X*Y*Z);
//return(areaCalc(X,Y) * Z);
return(areaCalc( areaCalc(X,Y) , Z));
}

console.log(areaCalc3d(7,4,3));