window.onload = function () {
//     postdata("http://localhost:2000/stocks",{}).then(result=>{
//     console.log(result)
//     result.forEach(data => {
//         console.log(data.stockPrice);
//     });
// }).catch(error=>{
//     console.log(error);
// })
fetch('http://localhost:2000/stocks')
.then(function(response) {
  // Do stuff with the response
  response.json().then(function(responseAsJson) {
    // Do stuff with the JSON
    console.log(responseAsJson);
  })
})
.catch(function(error) {
  console.log('Looks like there was a problem: \n', error);
});
  };

  function getsendData(url){
    return fetch(url).then((response)=>{
return response.json();
    }).catch(error=>{
        console.log(error);
    })

    
}

// function postsendData(url){
//     return fetch(url,{
//         method: 'POST',
//         mode : 'no-cors', //no-cors ,same-origin
//         cache: 'no-cache', // defualt ,reload ,force-cache
//         credentials : 'include', //include , same-origin,omi
//         headers :{
//             'Content-Type': 'application/json' //we use this option if we use POST
//             //if we use GET we use this option 'content-Type': 'application/X-www-form-urlencoded'
//         },
//         redirect:'follow', //manual ,error
//         referrer : 'no-referrer', //client
//         // this option we use it when make POST requste
//         body: JSON.stringify({
//             fname: "ahmad",
//             lname: "osman"
//         })
//     }).then((response)=>{
// return response.json();
//     }).catch(error=>{
//         console.log(error);
//     })
// }

function postdata (url = '', data = {}) {
    // Default options are marked with *
    return fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
          'Content-Type': 'application/json',
          
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      })
      .then(response => response.json()); // parses JSON response into native Javascript objects
  }