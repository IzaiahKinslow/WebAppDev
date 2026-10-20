//greet user 
function greetUser(name){
    console.log("Hello, " +name);


}

let userName = prompt("Enter your name: ")
greetUser(userName);


function addNumbers(num1, num2){
    return num1 + num2;
}
let num1 = Number(prompt("Enter your first number: "));
let num2 = Number(prompt("Enter your second number: "));

let addOutcome = addNumbers(num1, num2);
console.log("Sum: "+ addOutcome);



function calcArea(length, width){
    return length*width; 

}

let userLength = Number(prompt("Enter legth: "));
let userWidth= Number(prompt("Enter width: "));
let areaResult = calcArea(userLength, userWidth);
console.log("Area: " + areaResult);