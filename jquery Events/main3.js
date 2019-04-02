$(document).ready(function () {
    $("#button1").click(function () { 

        let animation={
            left:"15rem",
            top:"50rem",
            opacity:"0.2",
            width:"50rem",
            height:"50rem",
            backgroundColor: "blue"
            
        }
        $(".someDiv").animate(animation,1500);

        
    });
    
    
});