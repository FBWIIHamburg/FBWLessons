var apiKey="085e9cd33056f583efc844c7ec4f5f72";
window.onload=function(){
    let weatherDiv=document.getElementById("weather");
    let inputCity=document.createElement("input");
    inputCity.type="text";
    inputCity.placeholder="Write your City";
    inputCity.onkeypress=function(event){
        if(event.keyCode===13){
            showWeather(event);
        }
        
    }
    weatherDiv.appendChild(inputCity);
}

function showWeather(someVar){
    let inputCity=someVar.target.value;
let xhr = new XMLHttpRequest();

xhr.open("GET","https://api.openweathermap.org/data/2.5/weather?q="+inputCity+"&APPID="+apiKey);
xhr.send();
xhr.onreadystatechange=function(){
    
    if(xhr.readyState==4){
        if(xhr.status==200){
    // console.log(xhr.readyState);
    // console.log(xhr.status);
    // console.log(xhr.statusText);
    console.log(xhr.responseText);
        }
    }
}


}