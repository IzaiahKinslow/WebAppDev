// // why use loops?
// //repeat code multiple times without duplicating code 

// //The while loop: 
// //while(condition){
//     //code to run on repeat if condition is true 
//     // infinite loops, make sure something inside changes the condition
// //}

// //basic program that counts from 1 to 5

// // let count=0 
// // while(count<=5){//checks condition
// //     console.log("count is: "+count);
// //     count++ //increment to avoid infinite loop
// // }



// //for loop
// //for(initialization; condition; final-expression){
//     //repeated code


// for(let i=1;i<=5; i++ ){
//     console.log("Count is: "+i)
// }

//program that lets the use rpick what number to count to 
// let num=Number(prompt("pick a number: "));
// for (let i=1; i<=num;i++){
//     console.log(i);
// } 


// classic triangle loop pattern 

let triangle="";
for(let line=1;line<=7;line++){
    triangle+="*"
    console.log(triangle);
}

