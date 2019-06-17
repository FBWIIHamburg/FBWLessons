$(document).ready(function () {
    $("#button1").click(function () { 
        $("#container").addClass("green withBorder");
        
    });
    $("#button2").click(function () { 
        $("#container").removeClass("green withBorder");
        
    });
    $("#button3").click(function () { 
        $("#container").toggleClass("green withBorder");
        
    });
    $("#button4").click(function () { 
        console.log($("#container").css("height"));//get style
        
    });
    $("#button5").click(function () { 
        //$("#container").css("width","50rem");//set style
        $("#container").css({
            "width":"50rem",
            "height":"50rem",
            "background-color":"blue"
        });
        
    });
});