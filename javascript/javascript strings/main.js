let name = "Ahmad Osman";
//console.log(name.indexOf("O"));
console.log(name);
console.log(name.length);

let someText="what does \"javascript\" mean?";
console.log(someText.toString());

let strictVar=new String("what does \"javascript\" mean?");
console.log(strictVar);
console.log(strictVar.lastIndexOf("blabla"));

function search(searchText , keyWord){
if(searchText.lastIndexOf(keyWord) != -1)
return(true);
else
return(false);
}
let mainText="asdsdf dfsdfds fsdfdsfervf dasfsdfdeser dsfdse4r ";
console.log(search(mainText,"fdea"));