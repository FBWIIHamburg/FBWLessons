// let materials=["Math","Science","English","German"];
// let students=["Ahmad","Petros","Wisam","Omar","Farooq"];


window.onload=function(){
    let materials=[];
    let students=[];
    let container=document.getElementById("container");

    let btn1 = document.createElement("button");
    btn1.innerText="Step1";
    btn1.onclick=function(){ stepClick(1)};
    container.appendChild(btn1);

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
                input.type="text";
                cell.appendChild(input);
            }
        } 
    }
    stepDiv3.innerHTML="";
stepDiv3.appendChild(table);
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
        stepDiv1.style.display="none";
        stepDiv2.style.display="block";
        stepDiv3.style.display="none";
            break;
    case 3:
        stepDiv1.style.display="none";
        stepDiv2.style.display="none";
        stepDiv3.style.display="block";
        buildTable();
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

}
