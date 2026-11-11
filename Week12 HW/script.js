
// Select the form and result section
const form = document.getElementById("signupForm");
const result = document.getElementById("resultSection");

// Listen for form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Stops page refresh

    // Get values from the inputs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const game = document.getElementById("game").value;
    const message = document.getElementById("message").value;

    // .checked is true or false for a checkbox, so use if/else to turn it into Yes or No
    let controller = "No";
    if (document.getElementById("controller").checked) {
        controller = "Yes";
    }

    // Display the info back to the user
    result.innerHTML = `
      <h3>Sign-Up Received!</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Night:</strong> ${date}</p>
      <p><strong>Game:</strong> ${game}</p>
      <p><strong>Own controller:</strong> ${controller}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;
});
