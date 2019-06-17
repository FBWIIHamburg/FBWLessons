var ratesblabla;
var fromSelect;
var toSelect;

window.onload=function(){
let req=new XMLHttpRequest();
req.open("GET","https://api.exchangeratesapi.io/latest");
req.send();
req.onload=function(){
    let jsonString=req.responseText;
    console.log(jsonString);
    let Obj=JSON.parse(jsonString);
    console.log(Obj);
    ratesblabla=Obj.rates;
    console.log(ratesblabla);
    let keys=Object.keys(ratesblabla);
    console.log(keys);
     fromSelect=document.getElementById("selectFrom");
     toSelect=document.getElementById("selectTo");
    for (let i = 0; i < keys.length; i++) {
        let toOpt=document.createElement("option");
        let fromOpt=document.createElement("option");
        toOpt.value=keys[i];
        fromOpt.value=keys[i];
        toOpt.innerText=keys[i];
        fromOpt.innerText=keys[i];
        fromSelect.appendChild(fromOpt);
        toSelect.appendChild(toOpt);
    }
}

}

function convert(){
    //console.log(ratesblabla["JPY"]);
    let selectedfromCurreny=fromSelect.value;
    let selectedtoCurreny=toSelect.value;
    //console.log(selectedtoCurreny);
    let selectfromRate=ratesblabla[selectedfromCurreny];
    let selecttoRate=ratesblabla[selectedtoCurreny];
    //console.log(selectfromRate);
    let moneyAmount=document.getElementById("inputNum").value;
    if(!isNaN(moneyAmount)){
        document.getElementById("resultLable").innerText=( parseFloat(moneyAmount)*selecttoRate/selectfromRate).toFixed(4);
    }
}