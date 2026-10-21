console.log("Linked")
// dom and basic manipulation
//what is the DOM?
// document object model, this is how the browser represents the webpage and memory 
//HTML elements becoms js object that we can change or delete
//JS to change text, images, colors, classes etc. This occurs after the web page fully runs 


//change text content with JS 
//we are going to find the HTML element via its ID attribute 
const title=document.getElementById("title");
//document represents the whole web page laoded in the browser 
// .getelementbyid finds the element inthe HTML with the exact ID 
//constant means that th variable referencee wont change, it wil always point to the same DOM element 
title.textContent="Welcome to my Webpage"
//text content accesses or changes the text inside the element 



//selecting element
//getelementbyid selects one element by its ID           document.getElementById("title")

//queryselector selects the first match(ID< Class, tag)   document.querySelector(".main")

//querySelectorAll(), Returns nodelist of all matches     document.querySelectorAll("p")


//querySelector
const mainSection=document.querySelector(".main");
mainSection.style.backgroundColor="#9b1010"


const paragraphs=document.querySelectorAll("p");
paragraphs.forEach((para, index) => {
    para.textContent + `paragraph ${index + 1}modified by queryselectorall()`;
    para.style.color = "#0f491d"; 
});




//add interactivity with event listeners
//select button
const button=document.getElementById("toggle");
//listen for a button click
button.addEventListener("click",() =>{
    //toggle the highlight class on the body
    document.body.classList.toggle("highlight");


});
