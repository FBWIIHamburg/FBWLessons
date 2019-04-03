function foo(num){
    if(num!=0)
    {
        console.log(num*(num-1));
        foo(num-1);
    }
}

foo(4);

function fact(num){
    if(num <= 1){
        return (1);
    }
    else{
        return num * fact(num - 1);
    }
}
console.log(fact(5));

var counter=0;
function sum(num){
    counter++;
    if(num <= 0){
        return (0);
    }
    else{
        return num + sum(num - 1);
    }
}
console.log(sum(3));
console.log(counter);