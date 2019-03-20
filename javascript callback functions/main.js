function first(someFunc){

    setTimeout(function(){
    console.log(1);
    someFunc();
    }
    ,1000)
}

function second(){
    console.log(2);
}
function buttonClick(){
    first(second);
    
}