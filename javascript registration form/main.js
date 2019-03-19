function nextDiv(element){
//alert();

let checkfName=document.getElementsByName("fName")[0].checkValidity();
let checklName=document.getElementsByName("lName")[0].checkValidity();
let checkbDate=document.getElementsByName("bDate")[0].checkValidity();
let checknationality=document.getElementsByName("nationality")[0].checkValidity();
let birthDate=document.getElementsByName("bDate")[0].value;
let currentDate=new Date();
//alert(Math.floor((currentDate-Date.parse(birthDate))/(1000 * 60 * 60 * 24*365)) );
let fatherDiv=element.parentNode.id;
switch (fatherDiv) {
    case "personalDiv":
    if(checkfName && checklName && checkbDate && checknationality){
    element.parentNode.style.display="none";
    document.getElementById("addressDiv").style.display="block";
    }
    else{
        alert("you Have invalid entries");
    }

        break;

    default:
        break;
}
}