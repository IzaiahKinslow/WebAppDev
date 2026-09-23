
// 2. Grade Calculator

let score = Number(prompt("Enter your score (0-100):"));
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}


// 3. Age Check

let age = Number(prompt("Enter your age:"));


if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}


// 4. Custom Check (Example: Movie Rating Check)

let movieAge = Number(prompt("Enter your age to check movie ticket category:"));


if (movieAge <= 12) {
    console.log("Ticket Category: Child (Discounted)");
} else if (movieAge >= 65) {
    console.log("Ticket Category: Senior (Discounted)");
} else {
    console.log("Ticket Category: General Admission");
}
