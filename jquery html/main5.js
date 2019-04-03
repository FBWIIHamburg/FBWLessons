$(document).ready(function () {
//deminsions without padding, border or margin
console.log("width: "+$("#container").width());
console.log("Height: "+$("#container").height());

//deminsions with only padding
console.log("inner width: "+$("#container").innerWidth());
console.log("inner Height: "+$("#container").innerHeight());

//deminsions with padding and border
console.log("outer width: "+$("#container").outerWidth());
console.log("outer Height: "+$("#container").outerHeight());

//deminsions with  border,padding and margin
console.log("outer width true: "+$("#container").outerWidth(true));
console.log("outer Height true: "+$("#container").outerHeight(true));



$("#widthInp").val($("#container").width());
$("#heightInp").val($("#container").height());
$("#widthInp").change(function () { 
    $("#container").width($("#widthInp").val()+"px")
 });
 $("#heightInp").change(function () { 
    $("#container").height($("#heightInp").val()+"px")
 });



});