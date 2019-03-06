// let materials=["Math","Science","English","German"];
// let students=["Ahmad","Petros","Wisam","Omar","Farooq"];

window.onload=function(){
    let container=document.getElementById("container");

    let btn1 = document.createElement("button");
    btn1.innerText="Step1";
    btn1.addEventListener("click",stepClick(1));
    container.appendChild(btn1);

    let btn2 = document.createElement("button");
    btn2.innerText="Step2";
    btn2.addEventListener("click",stepClick(2));
    container.appendChild(btn2);

    let btn3 = document.createElement("button");
    btn3.innerText="Step3";
    btn3.addEventListener("click",stepClick(3));
    container.appendChild(btn3);

    let stepsContainer = document.createElement("div");
    stepsContainer.id="stepsContainer";
    container.appendChild(stepsContainer);

    let stepDiv1 = document.createElement("div");
    stepDiv1.innerText="Step1";
    stepsContainer.appendChild(stepDiv1);

    let stepDiv2 = document.createElement("div");
    stepDiv2.innerText="Step2";
    stepDiv2.style.display="none";
    stepsContainer.appendChild(stepDiv2);

    let stepDiv3 = document.createElement("div");
    stepDiv3.innerText="Step3";
    stepDiv3.style.display="none";
    stepsContainer.appendChild(stepDiv3);

function buildTable(){
    
    if(container!=null){

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
container.appendChild(table);
    }else{
        alert("There is no container Element");
    }
}
 function stepClick(num){
//     let stepDiv1=document.querySelector("#stepsContainer div:nth-child(1)");
//     let stepDiv2=document.querySelector("#stepsContainer div:nth-child(2)");
//     let stepDiv3=document.querySelector("#stepsContainer div:nth-child(3)");
//     switch (num) {
//         case 1:
//             stepDiv1.style.display="block";
//             stepDiv2.style.display="none";
//             stepDiv3.style.display="none";
//             break;
//         case 2:
//             stepDiv1.style.display="none";
//             stepDiv2.style.display="block";
//             stepDiv3.style.display="none";
//             break;
//         case 3:
//             stepDiv1.style.display="none";
//             stepDiv2.style.display="none";
//             stepDiv3.style.display="block";
//             break;
    
//         default:
//             break;
//     }
 }

}