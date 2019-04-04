$(document).ready(function () {
    //$("h1").add("span").add("p").css("background-color","yellow");
  //$("p").children().css("background-color","red"); // select all children
  //$("p").children("span").css("background-color","red");// select only span children
  $("p").children().eq(7).css("background-color","red");// select the eighth child inside p

});