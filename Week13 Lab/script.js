
// Select the form, inputs, and message paragraphs
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const ageError = document.getElementById("ageError");
const successMessage = document.getElementById("successMessage");

// A regex is a pattern for text. This one checks for something@something.something
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Check the name, show or clear the error, and return true if it is okay
function checkName() {
    // .trim() removes spaces so a name with only spaces counts as empty
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        return false;
    } else {
        nameError.textContent = "";
        return true;
    }
}

function checkEmail() {
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Please enter your email.";
        return false;
    // .test() checks if the text matches the pattern and gives back true or false
    } else if (emailPattern.test(emailInput.value.trim()) === false) {
        emailError.textContent = "Please enter a valid email like you@example.com.";
        return false;
    } else {
        emailError.textContent = "";
        return true;
    }
}

function checkAge() {
    if (ageInput.value === "") {
        ageError.textContent = "Please enter your age.";
        return false;
    } else if (Number(ageInput.value) < 1) {
        ageError.textContent = "Age must be at least 1.";
        return false;
    } else {
        ageError.textContent = "";
        return true;
    }
}

// blur runs when the user leaves a field, so they get feedback right away
nameInput.addEventListener("blur", checkName);
emailInput.addEventListener("blur", checkEmail);
ageInput.addEventListener("blur", checkAge);

// Listen for form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Stops page refresh

    // Run all three checks so every error shows at the same time
    const nameOk = checkName();
    const emailOk = checkEmail();
    const ageOk = checkAge();

    if (nameOk && emailOk && ageOk) {
        successMessage.textContent = "Form submitted successfully!";

        // .reset() empties the inputs, but it does not clear my error messages
        form.reset();
        nameError.textContent = "";
        emailError.textContent = "";
        ageError.textContent = "";
    } else {
        successMessage.textContent = "";
    }
});
