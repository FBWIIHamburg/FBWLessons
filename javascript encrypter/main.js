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

return storage;
}
// let encryptedText="52000,50500,54000,54000,55500,16000,16000,36500,16000,48500,54500,16000,32500,52000,54500,48500,50000";
// console.log(decrypter(encryptedText,500));

function encryptClick(){
    let inputText = document.getElementById("inputText").value; 
    let key = document.getElementById("keyinput").value;
    
    if(!isNaN(key) && key.trim()!=""){
        document.getElementById("inputcode").value=encrypter(inputText,key);
    }
    else{
        alert("unvalid key number");
    }
}
function decryptClick(){
    let codeText = document.getElementById("inputcode").value; 
    let key = document.getElementById("keyinput").value;
    
    if(!isNaN(key) && key.trim()!=""){
        document.getElementById("inputText").value=decrypter(codeText,key);
    }
    else{
        alert("unvalid key number");
    }
}

function checkNumber(e){
    
    if (e.which < 48 || e.which > 57 )
    {
        
            e.preventDefault();
        
        
    }
    
}