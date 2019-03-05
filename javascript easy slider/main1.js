let switcher=true;
function switchColor(){
    let container=document.getElementsByClassName("container")[0];
    if(switcher){
        container.style.backgroundColor="red";
        switcher=false;
    }
    else{
        container.style.backgroundColor="green";
        switcher=true;
    }
    
    
}