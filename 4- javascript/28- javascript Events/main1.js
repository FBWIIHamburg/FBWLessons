function pressKey(e){
    console.log(e.keyCode);
    if(e.which>90 || e.which<65){
    e.preventDefault();
    }
}