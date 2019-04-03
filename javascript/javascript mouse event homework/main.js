function bubbleRise(e){
    console.log(e.clientX,e.clientY);
    let body=document.getElementsByTagName("body")[0];
    //console.log(body);
    let bubbleDiv=document.createElement("div");

bubbleDiv.className="bubble";
bubbleDiv.style.left=e.clientX-5+"px";
bubbleDiv.style.top=e.clientY-5+"px";
body.appendChild(bubbleDiv);
let counter=10;
let opacity=1;
let sizeIncreaser=setInterval(function(){
    opacity -=0.05;
    counter++;
    bubbleDiv.style.width=counter+"px";
    bubbleDiv.style.height=counter+"px";
    bubbleDiv.style.left=e.clientX-counter/2+"px";
    bubbleDiv.style.top=e.clientY-counter/2+"px";
    bubbleDiv.style.opacity=opacity;
    if(opacity<=0){
clearInterval(sizeIncreaser);
body.removeChild(bubbleDiv);
    }
},
100);

}