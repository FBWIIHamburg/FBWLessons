function counter(n1,n2){
    let sum=0;
    let karrar=n1;
    if(n1 <= n2){
    
  while(karrar<=n2){
    //console.log(karrar);
    sum = sum + karrar;
    karrar = karrar + 1; // index++;
  }
    }else{
  
      
  while(karrar>=n2){
    //console.log(karrar);
    sum = sum + karrar;
    karrar = karrar - 1; // index--;
  }
  
    }
    console.log(sum);
    
  }
  counter(5,1);