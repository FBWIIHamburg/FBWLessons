const newUserButton = document.querySelector('#btnAddUser');
newUserButton.addEventListener('click',()=>{
const newUserName = document.querySelector('#name').value;
const newUserAge = document.querySelector('#age').value;
if(newUserName.trim().length !== 0 &&
  newUserAge.trim().length !== 0  &&
    !isNaN(newUserAge)){
    const userList = document.querySelector('.user-list');
    const newElement = document.createElement('li');
    newElement.classList.add('user-item');
    newElement.textContent = newUserName +' ('+newUserAge+ ' years old)';
    userList.appendChild(newElement);
}
});
