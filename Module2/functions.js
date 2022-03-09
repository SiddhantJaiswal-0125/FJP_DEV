//Creating Function in JavaScript
function sum( a, b)
{
return a+b;
}
console.log(sum(10, 15));


//CREATING inLine Function
//Functions are called First Class Citizen in JS as We can store them in Inline Variable
let a = function sub(n1, n2){
    return n1 - n2;
}
console.log(a(10,3));


//IIFE : Immediately-Invoked Function Expression

//WITH NO PARAMETER
(
    function(){
         console.log("INSIDE IIFE");
    }
) ();

//IIFI with Parameter
(
    function(n1, n2){
    console.log("IIFI WITH PARAMETER "+n1/n2);
}
)(10,2); //This line is for calling the same function;