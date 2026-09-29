// theme: basketball season check

// ask the user for 3 values
let wins = Number(prompt("How many games did the team win?"));
let losses = Number(prompt("How many games did the team lose?"));
let streak = Number(prompt("What is the current win streak?"));

console.log(wins);
console.log(losses);
console.log(streak);

// rule 1: check if it's a winning season
if (wins > losses) {
    console.log("Winning season!");

    // rule 2 (nested inside rule 1): check if the team is on a hot streak
    if (streak >= 3) {
        console.log("The team is on a hot streak!");
    }
} else {
    console.log("Not a winning season.");
}

// rule 3: check if the team currently has no win streak at all
if (streak === 0) {
    console.log("No active win streak right now.");
}

// rule 4: check if the team has lost any games using strict not-equal
if (losses !== 0) {
    console.log("The team has lost at least one game this season.");
}
