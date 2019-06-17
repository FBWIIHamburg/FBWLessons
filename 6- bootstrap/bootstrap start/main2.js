$(document).ready(function () {
    
    $("#ageInput").change(function () { 
       let age=parseInt( $(this).val());
        if(age<18){
       // alert();
       $('#exampleModal').modal('hide');
        }
    });


});


function hideModal(){
    $('#exampleModal').modal('hide');
}
function showModal(){
    $('#exampleModal').modal('show');
}
