window.onload=function(){


    let req=new XMLHttpRequest();
    
    // https://api.nasa.gov/planetary/apod?api_key=QSXiz4hOiAKiHZozru4NQhDfQjL9zYLwBkrlvvo8
    req.open("GET",'https://api.nasa.gov/planetary/apod?api_key=QSXiz4hOiAKiHZozru4NQhDfQjL9zYLwBkrlvvo8',true);
    req.send();
    req.onload=function(){
        let jsonString=req.responseText;
        console.log(jsonString);
    }



}