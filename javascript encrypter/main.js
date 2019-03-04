function encrypter(text,key){
    let storage=[];
    for(let i=0;i<text.length ; i++){
        storage.push(text[i].charCodeAt(0)*key);
    }
    return storage.join(",");
}
console.log(encrypter("hello  I am Ahmad",500));


function decrypter(code,key){
    let numbersArr=code.split(",");
    let storage="";
    for(let i = 0 ; i< numbersArr.length ; i++)
    {
        storage =storage +String.fromCharCode(numbersArr[i]/key);
        //storage += numbersArr[i];
    }

console.log(storage);
}
let encryptedText="52000,50500,54000,54000,55500,16000,16000,36500,16000,48500,54500,16000,32500,52000,54500,48500,50000";
decrypter(encryptedText,500);