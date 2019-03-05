console.log((Math.random()*10)+10);
console.log(Math.floor(0.9224));//round to less integer number
console.log(Math.round(0.454));//normal round
console.log(Math.floor((Math.random()*3))+1);

window.onload=function(){
    setInterval(function(){
document.getElementById("result").innerHTML=Math.floor((Math.random()*10))+1;
    },200)
    
}