window.onload=function(){
    var counter=0;
let aftertenMinPromise=new Promise(counter,function(resolve,reject){
    
    if(counter==10){
        resolve(counter);
    }else{
        reject(counter);
    }
    

});

setInterval(()=>{
    counter++;
    aftertenMinPromise(counter).then((c1)=>{
        console.log(c1);
    }).catch((c2)=>{
        console.log(c2);
    });
    console.log(counter);
},1000);



}

