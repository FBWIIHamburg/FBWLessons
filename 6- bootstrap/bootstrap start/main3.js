$(document).ready(function () {


    $('.carousel').carousel({
        interval: 500
      });

    $('.carousel').on('slide.bs.carousel', function (e) {


        //console.log( $(".carousel-inner").children().index(e.relatedTarget))
        let i = $(".carousel-inner").children().index(e.relatedTarget);

        $(".navbar-nav").children().removeClass("active");

        $(".navbar-nav").children().eq(i).addClass("active");


    });
});

function someClick(){ 
    $('.carousel').carousel(2);
 }


 


