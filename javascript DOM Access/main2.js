window.onload=function(){


let storage="";
    for(let i = 1;i<=100;i++){
        if(i!=100){
            storage +=i+",";
        }
        else{
            storage +=i;
        }
}

document.getElementById("result").innerHTML=storage ;

}
