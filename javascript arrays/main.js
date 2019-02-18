
let arr1=["ff","gg",3,"6"];
console.log(arr1);
console.log("////////");
arr1.push(8);
arr1.push("der");
console.log(arr1);

//let somearr=[0,1,2,3,4,5,6,7,8,9,10,11]

let someVar =[];
for (let i = 0; i <=1000; i++) {
    someVar.push(i);
    
}
console.log(someVar);


console.clear();

let arr=[1,3,-3,2,7];
console.log("the length is "+arr.length);

let largest=arr[0];
let smallest=arr[0];

for(let i = 1 ; i < arr.length ;i++ ){
    if(largest < arr[i]){
        largest = arr[i];
    }
    if(smallest > arr[i]){
        smallest = arr[i];
    }
    //console.log(arr[i]);
}
console.log("the larges is "+largest);
console.log("the smallest is "+smallest);