
window.onload=function(){
    let materials=[];
    let students=[];
    let container=document.getElementById("container");

    let btn1 = document.createElement("button");
    btn1.innerText="Step1";
    btn1.onclick=function(){ stepClick(1)};
    container.appendChild(btn1);
    //btn1.disabled=true;

    let btn2 = document.createElement("button");
    btn2.innerText="Step2";
    btn2.onclick=function(){ stepClick(2)};
    container.appendChild(btn2);

    let btn3 = document.createElement("button");
    btn3.innerText="Step3";
    btn3.onclick=function(){ stepClick(3)};
    container.appendChild(btn3);

    let stepsContainer = document.createElement("div");
    stepsContainer.id="stepsContainer";
    container.appendChild(stepsContainer);

    let stepDiv1 = document.createElement("div");
    stepsContainer.appendChild(stepDiv1);

    let step1Lable=document.createElement("lable");
    step1Lable.innerText="Material name";
    stepDiv1.appendChild(step1Lable);

    let step1Text=document.createElement("input");
    step1Text.type="text";
    step1Text.onkeypress=function(){addmaterialPress(event)};
    stepDiv1.appendChild(step1Text);

    let step1button=document.createElement("button");
    step1button.innerText="Enter";
    stepDiv1.appendChild(step1button);
    step1button.onclick=function(){saveMaterial()};

    let stepDiv2 = document.createElement("div");
    stepDiv2.style.display="none";
    stepsContainer.appendChild(stepDiv2);

    let step2Lable=document.createElement("lable");
    step2Lable.innerText="Student name";
    stepDiv2.appendChild(step2Lable);

    let step2Text=document.createElement("input");
    step2Text.type="text";
    step2Text.onkeypress=function(){addstudentPress(event)};
    stepDiv2.appendChild(step2Text);
    
    let step2button=document.createElement("button");
    step2button.innerText="Enter";
    step2button.onclick=function(){saveStudent()};
    stepDiv2.appendChild(step2button);

    let stepDiv3 = document.createElement("div");
    stepDiv3.style.display="none";
    stepsContainer.appendChild(stepDiv3);

function buildTable(){
    
if(materials.length!=0 && students.length!=0){
    let table=document.createElement("table");
    let tableHeader=table.createTHead();
    let headRow=tableHeader.insertRow(0);
    for (let h = 0; h <= materials.length; h++) {
        let headCell=headRow.insertCell(h);
        if(h==0){
        headCell.innerText="Student Name";
        }else
        {
            headCell.innerText=materials[h-1];
        }
    }
    let tableBody=table.createTBody();
    for (let i = 0; i < students.length; i++) {
        let row = tableBody.insertRow(i);
        for (let x = 0; x <= materials.length; x++) {
            let cell=row.insertCell(x);
            if(x==0){
                cell.innerText=students[i];
            }
            else{
                let input=document.createElement("input");
                input.type="number";
                input.id="input_"+i+"_"+(x-1);
                input.value="0";
                cell.appendChild(input);
            }
        } 
    }
    stepDiv3.innerHTML="";
stepDiv3.appendChild(table);
let resultButton=document.createElement("button");
resultButton.innerText="Result";
resultButton.onclick=function(){buildResultTable()};
stepDiv3.appendChild(resultButton);
let resultDiv=document.createElement("div");
resultDiv.id="resultDiv";
stepDiv3.appendChild(resultDiv);
}
   
}
function stepClick(num){
    
    switch (num) {
    case 1:
        stepDiv1.style.display="block";
        stepDiv2.style.display="none";
        stepDiv3.style.display="none";
            break;
    case 2:
if(materials.length==0){
    alert("you have to add Materials");
}else{

    let agree=confirm("Are you Sure?");
    if(agree){
        stepDiv1.style.display="none";
        stepDiv2.style.display="block";
        stepDiv3.style.display="none";
        btn1.disabled=true;
    }
}
            break;
    case 3:
    if(materials.length==0 || students.length==0 ){
        alert("Either you did not enter materials or students");;

    }else{
if(confirm("are you sure?")){
        stepDiv1.style.display="none";
        stepDiv2.style.display="none";
        stepDiv3.style.display="block";
        buildTable();
        btn2.disabled=true;
}
    }
            break;
    
    }
     }
function saveMaterial(){
    materials.push(step1Text.value);
    step1Text.value="";
     }
function saveStudent(){
    students.push(step2Text.value);
    step2Text.value="";
    }
function buildResultTable(){
    
        if(materials.length!=0 && students.length!=0){
            let table=document.createElement("table");
            let tableHeader=table.createTHead();
            let headRow=tableHeader.insertRow(0);
            for (let h = 0; h <= materials.length+1; h++) {
                let headCell=headRow.insertCell(h);
                if(h==0){
                headCell.innerText="Student Name";
                }else
                {
                    
                    if(h==materials.length+1){
                        headCell.innerText="Average";
                    }
                    else{
                        headCell.innerText=materials[h-1];
                    }
                }
            }
            let tableBody=table.createTBody();
            for (let i = 0; i < students.length; i++) {
                let row = tableBody.insertRow(i);
                let sum=0;
                for (let x = 0; x <= materials.length+1; x++) {
                    let cell=row.insertCell(x);
                    if(x==0){
                        cell.innerText=students[i];
                    }
                    else{
                        if(x==materials.length+1){
                            cell.innerText=(sum/materials.length).toFixed(2);
                        }else{
                        let input=document.getElementById("input_"+i+"_"+(x-1));
                        cell.innerText=input.value;
                        sum +=parseFloat( input.value);
                        }
                        
                    }
                } 
            }
            let resultDiv=document.getElementById("resultDiv");
            resultDiv.innerText="";
            resultDiv.appendChild(table);
        }
        
        }
        function addmaterialPress(event){
            if(event.keyCode==13){
                saveMaterial();
            }

        }
        function addstudentPress(event){
            if(event.keyCode==13){
                saveStudent();
            }

        }
}
