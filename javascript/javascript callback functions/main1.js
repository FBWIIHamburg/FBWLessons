function clickButton(somenum,someFunc)
{
setTimeout(function(){
    for (let index = 1; index <= 10; index++) {
        console.log(index);  
    }
    someFunc(somenum);
},5000)
    
}
function anotherCounter(num){
    for(let i=11;i<=num;i++){
        console.log(i);
    }
}

clickButton(50,anotherCounter);
//anotherCounter();