$(document).ready(function () {


    let sendData={
        "key":"12000491-41fc68d8c365df909e022ceb6",
        "q":"bear",
        "image_type":"photo",
        "category":"animals",
        "pretty":true
    }
$.ajax({
    type: "GET",
    url: "https://pixabay.com/api/",
    data: sendData,
    dataType: "json",
    success: function (response,par,status) {
        console.log(status.readyState);
    },
    error:function (er) { 
        console.log(er);
     }
     

});


});

//?key=12000491-41fc68d8c365df909e022ceb6&q=yellow&image_type=photo&pretty=true