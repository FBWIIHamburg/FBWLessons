


   $(document).ready(function () {
//onclick event
    $(".testDiv").click(function(){
        alert("hi click");
        });

        //onclick event for the inner div and 
        //with preventing to run the main div clcik function
    $(".subtestDiv").click(function(e){
        e.stopPropagation();
        alert(e.clientX);
        });
        //mouse over div event
    $(".testDiv").mouseenter(function () { 
        alert("your mouse is over red div");
    });
//when the mouse leave the area of the div
    $(".testDiv").mouseleave(function () { 
        
        alert("your mouse is out red div");
    });

   $(".somediv").hover(function (e) { 
       alert("you are over the mouse"+e.clientX);
   });


       
   });



















   // $(".subtestDiv").click(function(event){
        //     event.stopPropagation();
        //     });