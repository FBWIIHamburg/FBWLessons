let animals = new Set();
animals.add('pig');
animals.add('horse');
animals.add('cat');
console.log(animals);
console.log(animals.size);
animals.add('lion');
console.log(animals);
console.log(animals.size);
console.log(animals.has('pig'));
console.log(animals.delete('pig'));
console.log(animals);
console.log(animals.size);
console.log(animals.delete('dog'));

//fetching
animals.forEach(animal =>{
console.log(animal);
});


let someArray=["apple","orange","Bannana"];
someArray.forEach(item =>{
console.log(item);
});

animals.clear();
console.log(animals);
console.log(animals.size);