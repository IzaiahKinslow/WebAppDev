// what is a function?
//reusable block of code designed to perform a specific task 

// function greetUser(){
//     console.log("Hello there");
// }
// greetUser(); //calls the function

// 


// function greet(name){
//     console.log("Hello"+ name);
// }

// greet("Sebastian"); //"sebastian" is the argument 

//function that will add two numbers together and then console log the total 

// function addNumbers(a,b){
//     return(a+b);
// }

// let total=addNumbers(4,6)
// console.log("The total is:" + total)

// //return is like your function handing you back notes with the answer on it 
// //console.log is like your function yelling out the answer. we can hear it but we cant use it 

// function multiply(x,y){
//     return(x*y)
// }

// let result=multiply(15,15);
// console.log(result)


// function countTo(n){
//     for (let i=1; i<=n; i++) {
//         console.log(i);
//     }
// }
// countTo(5); 

// //nested functions
// //function can call another function inside of it 

// function square(num){
//     return num*num;
// }

// function printSquare(num){
//     console.log("Square is:"+ square(num));
// }

// printSquare(6)

function userName(){
    let name=prompt("what is your name? ");
    console.log("Welcome, "+ name);
}

userName():