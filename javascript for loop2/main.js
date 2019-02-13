for(let i = 0 ; i < 12 ;i+=2) {
    console.log(i);
}

console.log("/////////// revers loop");
for(let x = 10 ; x > 0 ; x-=2){
    console.log(x);
}

for(let j = 0 ; j<=10 ; j++){
    for(let k = 0 ; k<=10 ; k++){
        console.log("j is "+j+" and k is "+k);
    }
    console.log("//////new j loop")
}

for (let n = 1; n < 11; n++) {
    for (let m = 1; m < 11; m++) {
        console.log(n+"x"+m+"="+n*m);
        
    }
    
}


for(let h = 0 ; h < 10 ; h++){
    let virtLine="";
    for(let y = 0 ; y < 10 ; y++){
        virtLine +=4;
    }
    console.log(virtLine+h);
}
console.clear();



let starsStorage="********************";
for(let i = 20 ; i > 0 ; i--){
starsStorage = starsStorage.substr(0,i);
console.log(starsStorage);
}
let someText = "Ahmad";
console.log(someText.substr(1,1));


