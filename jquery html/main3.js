$(document).ready(function () {
    $("#button1").click(function () { 
        let content1="<p>I am content1</p>";//way1

        let content2=$("<p></p>").text("I am content2");//way2

        let content3=document.createElement("p");//way3
        content3.innerText="I am content3";

        //adding the contents inside the container div
        $(".container").append(content1);//inside the div but at the end
        $(".container").prepend(content2);//inside the div but at the first
        $(".container").after(content3);//outside the div but after
        $(".container").before(content1);//outside the div but before

        
    });
$("#button2").click(function () { //remove only the content of the div
    $(".container").empty();
});
$("#button3").click(function () { //remove the div with its content
    $(".container").remove();
});


});