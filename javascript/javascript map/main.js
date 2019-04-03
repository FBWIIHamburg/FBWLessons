//let someMap= new Map();

let Dictionary= new Map([["Dog","Hund"],["Table","Tisch"],["Old","Alt"],["new","neu"]]);
console.log(Dictionary);
//get a value using a key
console.log(Dictionary.get("Dog"));
//check if the key is exist
console.log(Dictionary.has("Dog"));
// add new item to map
Dictionary.set("Door","Tür");
console.log(Dictionary.get("Door"));
console.log(Dictionary);
Dictionary.set(1,9999);
console.log(Dictionary);
console.log(Dictionary.get(1));
// print map size
console.log(Dictionary.size);
//delete item using key
console.log(Dictionary.delete("Dog"));
console.log(Dictionary);
let dicValues = Dictionary.values();
console.log(dicValues.next());
console.log(dicValues.next());