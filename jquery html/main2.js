$(document).ready( ()=> {
    
console.log($("#link1").attr("href"));//show the href attribute

$("#link1").attr("href","https://www.ahmad-osman.com");//change the href attribute

console.log($("#link1").attr("href"));//show the href attribute

$("#link1").attr("target","_blank");


$("#link2").attr(
    {
        "href":"https://www.blabla.com",
        "target":"_blank",
        "title":"blabla",
        "style":"color:red;"
    }
);

$("a").attr("href",function(i,old){
    console.log(i);
    console.log(old);
    return old+"/mail";
})


});