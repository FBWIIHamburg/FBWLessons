window.onload=function(){


let img = document.getElementById("img1");
    let counter=0;
setInterval(function(){
counter++;
img.setAttribute("src","./imgs/"+counter+".jpg");
if(counter==5){
counter=0;
}

},1000);



}