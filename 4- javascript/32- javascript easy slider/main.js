

window.onload=function(){
let counter=0;
let switcher=true;
    setInterval(doSomething,2000);

    function doSomething(){
        if(switcher){
            switcher=false;
        counter++;
        if(counter>0){
let previusImg=document.getElementsByTagName("img")[counter-1];
previusImg.style.top="-40vh";
previusImg.style.left="-50vw";
previusImg.style.transform="rotate(360deg)";
        }else{
            let leng=document.getElementsByTagName("img").length;
            let previusImg=document.getElementsByTagName("img")[leng-1];
previusImg.style.top="-40vh";
previusImg.style.left="-50vw";
previusImg.style.transform="rotate(360deg)";
        }
        
        let secondImg=document.getElementsByTagName("img")[counter];
        secondImg.style.top=0;
        secondImg.style.left=0;
        secondImg.style.transform="rotate(-360deg)";
        if(counter == document.getElementsByTagName("img").length-1){
            counter=-1;
        }
    }
    else{
        switcher=true;
    }
}

}