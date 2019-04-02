$(document).ready(function () {

    $("#someInput").focus(function (e) { 
        e.target.value="";
        
    });
    $("#someInput").blur(function (e) { 
        
        console.log("you are out of the input");
        alert(e.target.value);
        
    });

$(window).on({
    
    resize:function (e) { 
      console.log( $(window).width());
      console.log( $(window).height());
    },
    mousedown:function (e) { 
        console.log( e.clientX);
        console.log( e.clientY);
      }

    
});


});