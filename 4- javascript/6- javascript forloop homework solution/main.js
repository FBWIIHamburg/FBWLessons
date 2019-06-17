console.log("X  | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |10 |");
for(let i = 1 ; i<=10 ; i++){
let lineStorage=optimizer(i)+"|";
    for(let n = 1 ; n<=10 ; n++){
    lineStorage=lineStorage+optimizer(n*i)+"|";
    
    }
    console.log(lineStorage);
}

function optimizer(num){
    if(num<10 && num>=0){
        return(" "+num+" ");
    }
    else if(num>=10 && num < 100){
        return(num+" ");
    }
    else{
        return(num);
    }
}
