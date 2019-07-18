window.onload = function () {
    postsendData("http://localhost:2000/stocks").then(result=>{
    console.log(result)
    result.forEach(data => {
        console.log(data.stockPrice);
    });
}).catch(error=>{
    console.log(error);
})
  };

  function getsendData(url){
    return fetch(url).then((response)=>{
return response.json();
    }).catch(error=>{
        console.log(error);
    })
}

function postsendData(url){
    return fetch(url,{
        method: 'POST',
        mode : 'no-cors', //no-cors ,same-origin
        cache: 'no-cache', // defualt ,reload ,force-cache
        credentials : 'include', //include , same-origin,omi
        headers :{
            'Content-Type': 'application/json' //we use this option if we use POST
            //if we use GET we use this option 'content-Type': 'application/X-www-form-urlencoded'
        },
        redirect:'follow', //manual ,error
        referrer : 'no-referrer', //client
        // this option we use it when make POST requste
        body: JSON.stringify({
            fname: "ahmad",
            lname: "osman"
        })
    }).then((response)=>{
return response.json();
    }).catch(error=>{
        console.log(error);
    })
}