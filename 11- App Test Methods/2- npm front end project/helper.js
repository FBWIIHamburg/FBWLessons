function validator  (value, isNumber, notEmpty)   {
    if( isNumber && notEmpty){
        if(value.trim().length === 0){
            return false;
        }
        if(isNaN(value)){
            return false;
        }
        return true;
    }
    if(!isNumber && notEmpty){
        if(value.trim().length === 0){
            return false;
        }
        return true;
    }
}
exports.elementGenerator = (tagName, className, content)=>{
    let newElement = document.createElement(tagName);
    newElement.classList.add(className);
    newElement.textContent = content;
    return newElement;
};
exports.textGenerator = (userName, userAge)=>{
    return `${userName} ( ${userAge} years old )`
}
exports.checkAll = (userName, userAge)=>{
    if(validator(userName,false,true) && validator(userAge,true,true)){
        return true;
    }
    return false;
}
exports.validator = (value, isNumber, notEmpty) =>{
    return validator(value, isNumber, notEmpty) ;
}
