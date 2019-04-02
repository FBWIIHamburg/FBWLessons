$(document).ready(function () {
    var mousedivyDown=false;
    var diffX=0;
    var diffy=0;
$(".dragable").mousedown(function (e) { 
    console.log("div mouse down");
    let dragableDivposition = $(".dragable").position();
    mousedivyDown=true;
    diffX=e.clientX-dragableDivposition.left;//calculate x diffrence between mouse down and left div
    diffy=e.clientY-dragableDivposition.top;//calculate y diffrence between mouse down and top div
});
$(".dragable").mouseup(function () { 
    console.log("div mouse up");
    mousedivyDown=false;
});
$("body").mousemove(function (e) { 
    // values: e.clientX, e.clientY, e.pageX, e.pageY
    if(mousedivyDown){
    $(".dragable").css("top",e.clientY-diffy);
    $(".dragable").css("left",e.clientX-diffX);
    }
});
});