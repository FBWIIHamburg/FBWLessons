window.onload=function(){
    let someElement=document.querySelectorAll(".parclass");
    someElement[0].style.color="red";
    someElement[1].style.color="blue";
    //someElement.setAttribute("style","color:red;");

let secCounter=0;
let minCounter=0;
let houCounter=0;
let repetedEvent= setInterval(function(){
secCounter++;


if(secCounter==60)
{
    minCounter++;
    secCounter=0;
    if(minCounter==60)
{
    houCounter++;
    minCounter=0;
    if(houCounter==24)
{
    secCounter=0;
    minCounter=0;
    houCounter=0;
    
}
}
}
document.getElementById("result").innerText=secCounter + ":" + minCounter + ":" + houCounter;
},1000);


}