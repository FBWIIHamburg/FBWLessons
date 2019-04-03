function divClick(){
alert("hello");
}

window.onload=function(){

document.getElementById("div1").
addEventListener("click",divClick);


}

function bodyClick(e){
document
document.getElementById("divx").innerText=
"X position "+e.clientX;

document.getElementById("divy").innerText=
"Y position "+e.clientY;

let testDiv=document.getElementById("testDiv");
testDiv.style.width=e.clientX+"px";
testDiv.style.height=e.clientY+"px";



let stickDiv=document.getElementById("stickDiv");
stickDiv.style.top=e.clientY-25+"px";
stickDiv.style.left=e.clientX-25+"px";
}