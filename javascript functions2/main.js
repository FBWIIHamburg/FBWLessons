function calcOld(yearBirth){

    let age =2019 - yearBirth;
    console.log("I am "+ age + " years old");
    // console.log(2019 - yearBirth);
}

calcOld(1986);
calcOld(1995);

// My name is 'firstName'+'lastName' and 
// I am a 'work'

function aboutMe(firstName , lastName , work){
    console.log("My name is "+firstName+" "+lastName+" and I am a "+work);
}
aboutMe("ali", "Mohammed","Cleaner");
aboutMe("Mohammed", "Ali","Boxer");

function fun1(x){
    console.log(x*x + 2*x + 1);
    //           9  +  6  + 1
    //                 16

}
fun1(1);
fun1(2);
fun1(3);
function fun2(x){
    let result = x**3 + 2 * x**2 + 3*x + 9;
    console.log("the result is "+ result );

}
fun2(2);

function fun3(z , y){
    console.log("f(X , Y) = 2X + 2Y + XY + 3 ");
    console.log("f("+z+" , "+y+") = 2X"+z+" + 2X"+y+" + "+z+"X"+y+" + 3 ");
    console.log("f("+z+" , "+y+") = "+(2*z)+" + "+(2*y)+" + "+(z*y)+" + 3 ");

    console.log("f("+z+" , "+y+") = "+(2*z + 2*y + z*y + 3));
}
fun3(50,100);
fun3(1,1);

