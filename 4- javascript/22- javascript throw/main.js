function niceGuy(){
    let container=document.getElementById("container");
    if(container!=null){
        container.innerText="Hello I am a nice guy let's for a date";
    }else{
        throw "hey you dont have element with id container"
    }
    

}

window.onload=()=>{
   // try {
        niceGuy();
    // } catch (error) {
    //     console.log(error);
    // }
    
    console.log("I am code supose to run after the function");
}