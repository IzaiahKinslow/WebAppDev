console.log("linked")

const clickBtn= document.getElementById("clickBtn");
clickBtn.addEventListener("click", () =>{
    alert("Congrats on clicking the button! You've just downloaded 15 different viruses");
});


//double button
const dblButton=document.getElementById("dblButton");
dblButton.addEventListener("dblclick",() => {
    dblButton.textContent= "Double Clicked!";
});

const hoverText = document.getElementById("hoverText");
hoverText.addEventListener("mouseover", () => {
    hoverText.style.color = "red";
});

hoverText.addEventListener("mouseout", () => {
    hoverText.style.color = "Black";
});

document.addEventListener("keyup", () => {
    document.getElementById("output").textContent = "you pressed:" + event.key;
});

const userInput= document.getElementById("userInput");
userInput.addEventListener("input", () => {
    console.log("User typed: ", userInput.value);
});