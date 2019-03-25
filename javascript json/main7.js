var obj={
    zip: '21398,de',
    appid:"085e9cd33056f583efc844c7ec4f5f72"
  };
function register(){
    let username=document.getElementById("username1").value;
    let password=document.getElementById("password1").value;
    
    obj.email=username;
    obj.password=password;
    console.log(obj);
    console.log(JSON.stringify(obj));
    let sentData=JSON.stringify(obj);

    let req=new XMLHttpRequest();
    req.open("GET","https://samples.openweathermap.org/data/2.5/weather?q=London&appid=085e9cd33056f583efc844c7ec4f5f72");
    req.send();
    req.onload=function(){
    let responseData=req.responseText;
    console.log(responseData);
    };
}