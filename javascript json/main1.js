function getDog(){
    let req=new XMLHttpRequest();
    req.open("GET","https://dog.ceo/api/breeds/image/random");
    req.send();
    req.onload=function(){
        let jsonObj=req.responseText;
        console.log(jsonObj);
        let obj=JSON.parse(jsonObj);
        console.log(obj);
        console.log(obj.message);
        document.getElementById("img1").src=obj.message;
    }
}

window.onload=function(){
    setInterval(getDog,2000);
}