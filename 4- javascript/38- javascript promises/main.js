
var apiId="085e9cd33056f583efc844c7ec4f5f72";

var getdataPromis=new Promise(function(resolve,reject){
let xhr = new XMLHttpRequest();
xhr.open("GET","https://api.openweathermap.org/data/2.5/weather?q=hamburg&APPID="+apiId);

xhr.send();
    
xhr.onreadystatechange=function(){
    if(xhr.readyState==4){
if(xhr.status==200){
    // setTimeout(function(){
        resolve(xhr.responseText);
    // },5000);
       

}else{
    reject("data not done");
}
}
}
});
getdataPromis.then(function(dfdfd){
console.log(JSON.parse(dfdfd));

}).catch(function(sdsdsd){
    console.log(sdsdsd);
});

