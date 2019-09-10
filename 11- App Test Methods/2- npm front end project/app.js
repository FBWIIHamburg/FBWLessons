// npm install --save-dev webpack
// npm install --save-dev webpack-cli
const {validator, elementGenerator, textGenerator, checkAll} = require('./helper');

const initApp = ()=>{
    const newUserButton = document.querySelector('#btnAddUser');
    newUserButton.addEventListener('click',function(){
        addUser();
    }); 
};
function addUser(){
    const userName = document.querySelector('#name').value;
    const userAge = document.querySelector('#age').value;
    if(checkAll(userName, userAge)){
        let userList = document.querySelector('.user-list');
        const newElement = elementGenerator('li','user-item',textGenerator(userName, userAge))
        userList.appendChild(newElement);
    }
}
initApp();