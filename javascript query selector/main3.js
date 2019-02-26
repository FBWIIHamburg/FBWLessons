window.onload=function(){

let leftCounter=0;
let trigger=true;
let theBox=document.querySelector(".box");
setInterval
(function(){
theBox.style.left = leftCounter+"px";
if(trigger){
leftCounter++;
}else{
    leftCounter--; 
}
if(leftCounter==270){
trigger=false;
}
if(leftCounter==0){
trigger=true;
}
},10);
}