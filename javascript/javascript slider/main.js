window.onload=function(){
    let images=document.getElementsByTagName("img");
    let leftArrow=document.getElementsByClassName("left")[0];
    let rightArrow=document.getElementsByClassName("right")[0];
    let currentImageindx=0;
    rightArrow.addEventListener("click",function(){
        currentImageindx++;
        if(currentImageindx==images.length){
            currentImageindx=0;
        }
        for(let i =0; i <images.length;i++){
images[i].style.transform="translateX("
+currentImageindx*(-50)+"vw)";
        }
    });
    leftArrow.addEventListener("click",function(){
        currentImageindx--;
        if(currentImageindx<0){
            currentImageindx=images.length-1;
        }
        for(let i =0; i <images.length;i++){
images[i].style.transform="translateX("
+currentImageindx*(-50)+"vw)";
        }
    });
}


