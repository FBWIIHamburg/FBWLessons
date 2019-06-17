$(document).ready(function () {
    
$(".dropdown").click(function (e) { 
   // e.preventDefault();
   console.log($(e.target).children().first());
   $(e.target).children().first().slideToggle(1000);
    
});

});