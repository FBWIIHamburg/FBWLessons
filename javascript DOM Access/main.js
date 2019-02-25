window.onload = function(){
    let targetElement=document.getElementById("div1");
    if(targetElement!=null){
    targetElement.setAttribute("blabla","somwValue");
    targetElement.setAttribute("style","color:blue");
    targetElement.innerHTML ="this <u>is</u> a <b>text</b> created by javascript";
    //targetElement.innerHTML =targetElement.innerHTML+"this <u>is</u> a <b>text</b> created by javascript";
    }

    let links= document.getElementsByClassName("linkclass");
console.log(links);
if(links.length>0){
links[0].setAttribute("style","color:red;");
//links[1].setAttribute("style","color:red;");
}
}