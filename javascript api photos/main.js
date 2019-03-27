window.onload=function(){

let xhr=new XMLHttpRequest();
xhr.open("GET","https://pixabay.com/api/?key=12000491-41fc68d8c365df909e022ceb6&q=computer&image_type=photo&category=computer&pretty=true",true)
xhr.send();
xhr.onload=function(){
    console.log(xhr.responseText);
}

}