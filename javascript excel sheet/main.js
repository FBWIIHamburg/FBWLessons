let materials=["Math","Science","English","German"];
let students=["Ahmad","Petros","Wisam","Omar","Farooq"];
window.onload=function(){
    let container=document.getElementById("container");
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