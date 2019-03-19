function nextDiv(element){
//alert();

let checkfName=document.getElementsByName("fName")[0].checkValidity();
let checklName=document.getElementsByName("lName")[0].checkValidity();
let checkbDate=document.getElementsByName("bDate")[0].checkValidity();
let checknationality=document.getElementsByName("nationality")[0].checkValidity();
let checkaddress=document.getElementsByName("adress")[0].checkValidity();
let checkhauseNum=document.getElementsByName("hauseNum")[0].checkValidity();
let checkzipCode=document.getElementsByName("zipCode")[0].checkValidity();
let checkuName=document.getElementsByName("uName")[0].checkValidity();
let checkpsw=document.getElementsByName("psw")[0].checkValidity();
let checkimageFile=document.getElementsByName("imageFile")[0].checkValidity();
let passwordMatch=document.getElementsByName("psw")[0].value===document.getElementsByName("psw-repeat")[0].value;

let birthDate=document.getElementsByName("bDate")[0].value;
let currentDate=new Date();
//alert(Math.floor((currentDate-Date.parse(birthDate))/(1000 * 60 * 60 * 24*365)) );
let fatherDiv=element.parentNode.id;
switch (fatherDiv) {
    case "personalDiv":
    if(checkfName && checklName && checkbDate && checknationality){
    //element.parentNode.style.display="none";
    document.getElementById("addressDiv").style.display="block";
    //document.getElementById("profileDiv").style.display="none";
    //document.getElementById("resultDiv").style.display="none";
    }
    else{
        alert("you Have invalid entries");
    }

        break;
    case "addressDiv":
        if(checkaddress && checkhauseNum && checkzipCode){
            //element.parentNode.style.display="none";
            //document.getElementById("personalDiv").style.display="none";
            document.getElementById("profileDiv").style.display="block";
            //document.getElementById("resultDiv").style.display="none";
        }else{
            alert("you Have invalid entries");
        }
        break;
    case "profileDiv":
        if(checkuName && checkpsw && checkimageFile && passwordMatch){
            //element.parentNode.style.display="none";
            //document.getElementById("personalDiv").style.display="none";
            //document.getElementById("addressDiv").style.display="none";
            document.getElementById("resultDiv").style.display="block";
            showData();
        }else{
            alert("you Have invalid entries");
        }
        break;

    default:
        break;
}
}

function showData(){
    let fName=document.getElementsByName("fName")[0].value;
    let lName=document.getElementsByName("lName")[0].value;
    let bDate=document.getElementsByName("bDate")[0].value;
    let nationality=document.getElementsByName("nationality")[0].value;
    let address=document.getElementsByName("adress")[0].value;
    let hauseNum=document.getElementsByName("hauseNum")[0].value;
    let zipCode=document.getElementsByName("zipCode")[0].value;
    let uName=document.getElementsByName("uName")[0].value;
    let psw=document.getElementsByName("psw")[0].value;
    let imageFile=document.getElementsByName("imageFile")[0].value;

    document.getElementById("nameLable").innerText=fName+" "+lName;
    document.getElementById("birthdateLable").innerText=bDate;
    document.getElementById("nationalityLable").innerText=nationality;
    document.getElementById("addressLable").innerText=address + ", "+hauseNum+" "+zipCode;
    document.getElementById("unameLable").innerText=uName;
    document.getElementById("pswLable").innerText=psw;
    document.getElementById("photoLable").src=imageFile;


}