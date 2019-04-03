let someText="I love you so do you love me?";
let stringArray= someText.split("");
console.log(stringArray);
let storageArray=[];
for(let i=0 ; i<stringArray.length;i++){
    let checker = true;
    for(let x =0 ; x<storageArray.length ; x++)
    {
        if(storageArray[x]==stringArray[i]){
            checker=false;
            break;
        }
    }
    if(checker){
        storageArray.push(stringArray[i]);
    }
}

console.log(storageArray.join(""));


