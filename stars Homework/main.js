for(let i=0 ; i <= 4 ; i++){
    let storage="";
    for(let x = 4 ; x >=0 ; x--){
        if(x - i <=0){
            storage += "*";
        }else{
            storage += " "; 
        } 
    }
    console.log(storage);
}
console.log("////////////");
for(let i=0 ; i <= 4 ; i++){
    let storage="";
    for(let x = 4 ; x >=0 ; x--){
        if(x + i <=4){
            storage += "*";
        }else{
            storage += " "; 
        } 
    }
    console.log(storage);
}