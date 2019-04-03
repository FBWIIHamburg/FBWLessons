// {"coord":{"lon":10,"lat":53.55},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"base":"stations","main":{"temp":279.31,"pressure":1014,"humidity":81,"temp_min":277.15,"temp_max":281.48},"visibility":10000,"wind":{"speed":4.1,"deg":290},"clouds":{"all":75},"dt":1553510905,"sys":{"type":1,"id":1263,"message":0.004,"country":"DE","sunrise":1553490676,"sunset":1553535647},"id":2911298,"name":"Hamburg","cod":200}

var apiKey="085e9cd33056f583efc844c7ec4f5f72";

window.onload=function(){
    let weatherDiv=document.getElementById("weather");
    let inputCity=document.createElement("input");
    inputCity.type="text";
    inputCity.placeholder="Write your City";
    weatherDiv.appendChild(inputCity);
    let myContainer=document.createElement("div");
    weatherDiv.appendChild(myContainer);
    inputCity.onkeypress=function(event){
        if(event.keyCode===13){
            showWeather(event,myContainer);
        }
        
    }
    
}

function showWeather(someVar,mainDiv){
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
    let obj=JSON.parse(xhr.responseText);
    console.log(obj);
    console.log(obj.weather[0].main);
    buildContent(obj,mainDiv);
        }
    }
}


}

function buildContent(data,container){
    container.innerText="";
    let citynameH=document.createElement("h1");
    citynameH.innerText=data.name;
    container.appendChild(citynameH);
    let weathernameH=document.createElement("h2");
    weathernameH.innerText=data.weather[0].main;
    container.appendChild(weathernameH);
    let img=document.createElement("img");
    img.src="http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
    container.appendChild(img);
    let description=document.createElement("p");
    description.innerText=data.weather[0].description
    container.appendChild(description);
    let tempH=document.createElement("h3");
    tempH.innerHTML="temperiture is <u>"+(data.main.temp - 273.15 ).toFixed(2)+"</u> C";
    container.appendChild(tempH);
    let pressureH=document.createElement("h3");
    pressureH.innerHTML="Pressure is <u>"+data.main.pressure+"</u> Bar";
    container.appendChild(pressureH);

    let humidityH=document.createElement("h3");
    humidityH.innerHTML="humidity is <u>"+data.main.humidity+"</u> ";
    container.appendChild(humidityH);

    let tempminH=document.createElement("h3");
    tempminH.innerHTML="Min temperiture is <u>"+(data.main.temp_min - 273.15 ).toFixed(2)+"</u> C";
    container.appendChild(tempminH);

    let tempmaxH=document.createElement("h3");
    tempmaxH.innerHTML="Max temperiture is <u>"+(data.main.temp_max - 273.15 ).toFixed(2)+"</u> C";
    container.appendChild(tempmaxH);
    

}