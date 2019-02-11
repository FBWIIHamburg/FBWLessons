function compare(x,y,z){
if(x==y && x==z){
    console.log("all are equale")
} else if(x>=y && x>=z){
        console.log(x)
    }
    else if(y>=x && y>=z){
        console.log(y)
    }
    else if(z>=x && z>=y){
        console.log(z)
    }
    
}
compare(3,2,3);