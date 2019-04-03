let someVar =-4;

switch (someVar){

case -1:
case -2:
case -3:
console.log("It is less than zero");
break;

case 0 :
console.log("It is zero");
break;

case 1 :
console.log("It is one");
break;

case 2 :
console.log("It is tow");
break;

case 3 :
console.log("It is three");
break;

default:
console.log("I dont know");




}

function helloWorld(lang)
{
switch (lang){
    case "en" :
    console.log("hello");
    break;

    case "de" :
    console.log("hallo");
    break;

    case "fa" :
    console.log("salam");
    break;

    case "ar" :
    console.log("marhaba");
    break;

    default :
    console.log("i dont know dud");
}
}

helloWorld("de");

function compare(plant){
    switch (plant) {
        case "tomato":
            console.log("some consider it as a vegetable and others as a fruit");
            break;
        case "garlic":
        case "spanich":
            console.log("it is vigitable");
            break;
        case "banana":
        case "apple":
        case "watermelon":
            console.log("it is Fruit");
            break;
    
        default:
        console.log("We have not your wish in our Store");
            
    }
}

compare("garlic");