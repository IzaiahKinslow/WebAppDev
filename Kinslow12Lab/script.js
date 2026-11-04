

 
// Select the form and result section
const form = document.getElementById("contactForm");
const result = document.getElementById("resultSection");
 
// Listen for form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Stops page refresh
 
    // Get values from the inputs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const message = document.getElementById("message").value;
 
    // Display the info back to the user
    result.innerHTML = `
      <h3>Submission Received!</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Age:</strong> ${age}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;
});
 


 
// What do IDs do?
// They provide a unique identifier
 
// Why must your <script> tag be at the end of <body>?
// It makes sure all HTML elements load first before the JavaScript runs
 
// What does event.preventDefault() actually prevent?
//It stops the browser from reloading
 
// What does .value return?
// It returns the current text from input field
 
// why use template literals (${}) instead of string concatenation?
// They make variables into strings cleaner, more readable, and easier to write without relying on excessive + signs.
 