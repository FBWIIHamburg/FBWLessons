
for(let x = -50; x <= 50 ; x++){
    if(x**2 +(x-30)==0){

    console.log(x);
   }
}



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
for(let i = 0 ; i<110 ; i++){
gradeChecker(i);
}

