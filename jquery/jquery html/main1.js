$(document).ready(function () {
    //console.log($("body").html());//including html tags
    //console.log($("body").text());//exluding html tags

$("#button1").click(()=>{ 

//console.log($("#input1").val());// getting the value from input
$("#par").html("I am <i style='color:red;' >another</i> text set by jquery");
$("#input1").val("hallo");
$("#input1").focus();
 });


});