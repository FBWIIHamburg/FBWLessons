console.log((Math.random()*10)+10);
console.log(Math.floor(0.9224));//round to less integer number
console.log(Math.round(0.454));//normal round
console.log(Math.floor((Math.random()*3))+1);

window.onload=function(){
    let resultDiv=document.getElementById("result");
    setInterval(function(){
        let redRandom=Math.floor((Math.random()*255));
        let greenRandom=Math.floor((Math.random()*255));
        let blueRandom=Math.floor((Math.random()*255));
        resultDiv.style.backgroundColor="rgb("+redRandom+","+greenRandom+","+blueRandom+")"
        resultDiv.innerHTML=Math.floor((Math.random()*10))+1;
    },400)
    
}