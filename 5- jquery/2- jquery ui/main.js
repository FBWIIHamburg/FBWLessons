$(document).ready(function () {
    $( "#accordion" ).accordion();
    $( "#datepicker" ).datepicker({
        inline: true
    });
    $( "#menu" ).menu();
});


function themeChange(param) {
    $("#cssLink1").attr("href", "./themes/jquery_ui_"+param+"/jquery-ui.css");
}