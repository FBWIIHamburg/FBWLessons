var apiKey="085e9cd33056f583efc844c7ec4f5f72";
var inputCity="hamburg";
//https://api.openweathermap.org/data/2.5/weather?q="+inputCity+"&APPID="+apiKey

window.onload=()=>{
    
fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputCity+"&APPID="+apiKey).
then(status);

}


function status(response){
    console.log(response.status);
    if(response.status!==200){
        console.log("this city is not exist");
        return;
    }
    response.json().then(getData);
    }


    function getData(data){
        console.log(data.name);
        
        }