// comaprison operators
// === equal to
// !== not equal



console.log(1===1);
console.log(1!==1);

// let score=85;
// if (score>=90){
//    console.log("You got an A");
// }
// else if(score>=80){
//     console.log("you have a B");
// }
// else if (score>=70){
//     console.log("you got a C");
// }
// else {
//     console.log("You have a mediocre grade");
// }

// let age =25;
// let isMember=true;

// if (age>=18){
//     if(isMember){
//         console.log("Adult member benefits applied");
//     }
//     else{
//         console.log("Adult but no membership")
//     }
    
// }else{
//     console.log("minor")
// }


//we use promt() to make our websites more attractive 
//let score=85; 
//this variable is hardcoded so user cannot change it 

let score=Number(prompt("enter your score 1-100"));
//input is a string data type, we must convert to number data type
if (score>=90){
    console.log("You got an A");
}
else if(score>=80){
    console.log("you have a B");
}
else if (score>=70){
    console.log("you got a C");
}
else {
    console.log("You have a mediocre grade");
}

//document.body.innerHTML += "<P>The score oyu have is"

let username=prompt("Please enter your name")
document.body.innerHTML += "hello, " +username + "</p>";
