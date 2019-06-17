
window.onload=function () { 
   window.onscroll=function (e) {  
       let somePar=document.getElementById("somePar");
        if(isInViewport(somePar)){
            somePar.className +="animated fadeInLeft delay-2s";
        }
      }

 }

 var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};