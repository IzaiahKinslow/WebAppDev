// console.log("linked")

// const form=document.getElementById("contactform");
// //listen for the submit event

// form.addEventListener("submit", function(event){
//     event.preventDefault(); //this stops the page from reloading 
//     //get the input value
//     const name=document.getElementById("name").value;
//     //In the console state Hello "Username"
//     console.log("Hello, ", name);


// })

// display data on the front side of the website

const result=document.getElementById(contactform);
result.addEventListener("submit", (event)=>{
    event.preventDefault();
    const name=document.getElementById("name").value
    result.innerHTML=`<p>Hello, ${name}! Thanks for submitting. </p>`



})