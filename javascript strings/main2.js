let someText = "Hey, Ahmad is a software Developer, \
Ahmad like Boxing. \
Ahmad is a saxophone player";
console.log(someText.replace("Ahmad","Petros Paulos The first,"));

function reverser(someText){
    let storage="";
    for(let i = someText.length-1 ; i >= 0 ; i--){
        storage +=someText[i];
    }
    console.log(storage)
}
reverser(someText);

function reverser1(someText){
    return someText.split("").reverse().join("");
}
console.log(reverser1(someText));