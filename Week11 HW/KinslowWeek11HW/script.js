// 1. Find the button by its ID
// fixed: the ID was missing inside getElementById()
const themeButton = document.getElementById("themeToggle");

// 2. Listen for a click event on that button
// fixed: the method name addEventListener was missing
themeButton.addEventListener("click", () => {
// 3. Add/remove the "dark" class on the body
// fixed: the class name "dark" was missing inside toggle()
document.body.classList.toggle("dark");
console.log("Theme changed!");
});

const addBtn = document.getElementById("addItem");
const list = document.getElementById("items");
// counter++ adds 1 to the number each time it runs
let counter = 1;

addBtn.addEventListener("click", () => {
const newItem = document.createElement("li");
newItem.textContent = "Loot drop " + counter;
list.appendChild(newItem);
counter++;
});

// event delegation: one listener on the <ul> hears clicks on all of its <li> items
list.addEventListener("click", (event) => {
// event.target is the exact thing that was clicked
if (event.target.tagName === "LI") {
console.log("Removed: " + event.target.textContent);
// .remove() deletes the element from the page
event.target.remove();
}
});

// fixed: getElementId was a typo and the ID was blank
const keyOutput = document.getElementById("keyOutput");
// keyup runs when a key is released, and event.key is which key it was
// fixed: addListener was missing the word Event
document.addEventListener("keyup", (event) => {
keyOutput.textContent = "You pressed: " + event.key;
});
