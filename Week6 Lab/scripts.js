
// 2. Grade Calculator

let score = Number(prompt("Enter your score (0-100):"))[span_4](start_span)[span_4](end_span);

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

let age = Number(prompt("Enter your age:"));[span_5](start_span)[span_5](end_span)

if (age >= 18) {
    console.log("Adult");[span_6](start_span)[span_6](end_span)
} else {
    console.log("Minor");[span_7](start_span)[span_7](end_span)
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