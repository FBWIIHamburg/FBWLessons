$(document).ready(function () {
    var status=true;
    $("#button1").click(function () { 
        let animation;
        if(status){
         animation={
            left:"15rem",
            top:"50rem",
            opacity:"0.2",
            width:"50rem",
            height:"50rem",
            backgroundColor: "blue"
        }
        status=false;
    }else{
        animation={
            left:"0",
            top:($("#button1").height()+2)+"px",
            opacity:"1",
            width:"10rem",
            height:"10rem",
            backgroundColor: "red"
        }
        status=true;
    }
        $(".someDiv").animate(animation,1500,function(){hi("hallo");}).slideUp(6000).slideDown(3000);
        
    });


    $("#button2").click(function () { 
        $(".someDiv").stop();

    });
});
function hi(param) {
    alert(param); 
 }