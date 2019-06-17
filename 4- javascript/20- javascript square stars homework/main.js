// || x==0 || x==6 || i==6 || x==i || x+i==6
for(let i = 0 ; i < 7 ;i++){
    let storage="";
    for(let x = 0 ; x < 7 ;x++){
        if(i==0 || x==0 || x==6 || i==6 || x==i || x+i==6){
            storage +="*";
       }else
        {
           storage +=" ";
        }
    
   } 
   storage = i+storage;
   //storage = storage +i;
    console.log(storage);
  // storage="";
}