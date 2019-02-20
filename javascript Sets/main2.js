let arr=new Set();
arr.add(1);
arr.add(5);
arr.add(6);
arr.add(33);
arr.add(76);
console.log(arr.has(33));
/////////////////
arr.forEach(num =>{
console.log(num);
});
////////////////
for(let num of arr){
    console.log(num);
}
//////////////
let items = arr.values();
console.log(items.next());
console.log(items.next());
console.log(items.next());
console.log(items.next());
console.log(items.next());
console.log(items.next());
