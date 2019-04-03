function clickMe(){
    $(".div1").fadeTo("slow",0.5);
}
function clickMe2(){
    $(".div1").fadeToggle("slow");
}
$(document).ready(function(){
    //let check=true;
$(".submenu").click(function(){
    $(".menu").slideToggle(2000);
// if(check)
// {
//     $(".menu").slideDown(2000);
//     check=false;
// }else{
//     $(".menu").slideUp(2000);
//     check=true;
// }
});

})