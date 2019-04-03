// https://api.exchangeratesapi.io/latest

var data="I am still empty";

function getData(someFunc){

console.log("getting data");
let req= new XMLHttpRequest();
req.open("GET","https://api.exchangeratesapi.io/latest");
req.send();
req.onreadystatechange=function(){
if(req.readyState==4 && req.status==200){
    let jsonObj=req.responseText;
    data=JSON.parse(jsonObj);
    someFunc();
}
}
// req.onloadstart=function(){
//     console.log("I start");
// }
// req.onprogress=function(){
//     console.log("I do some progress");
// }
// req.onloadend=function(){
//     console.log("I finish");
// }


}
function buildTable(){
    console.log("building table");
    console.log(data);
}

window.onload=function(){
    getData(buildTable);

}
