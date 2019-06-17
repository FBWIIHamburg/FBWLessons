let fruits = ["Bannana","Orange","Apple","Struberry","Watermelon","Apple"];
console.log(fruits.toString());
//adding new element to array
fruits.push("Mango");
console.log(fruits);
//removing the first element from the array
fruits.shift();
console.log(fruits);
//adding new element to the beginning of the array
let someVar = fruits.unshift("Lemon");
console.log(fruits);
console.log(someVar);
//remove the last element from an array
fruits.pop();
console.log(fruits);
//change array element
fruits[4]="some change";
console.log(fruits);

console.log(fruits.join(" > "));

console.log(fruits.length);

//fruits.push("Apple");
console.log(fruits);
console.log(fruits.indexOf("Apple"));
console.log(fruits.lastIndexOf("Apple"));
console.log(fruits.join(" > "));

// fruits.sort();
// console.log(fruits);

fruits.reverse();
console.log(fruits);