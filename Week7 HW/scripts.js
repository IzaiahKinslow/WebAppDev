// theme: basketball

// ask the user for 2 values
var numGames = Number(prompt("How many games are in the team's win streak?"));
var targetScore = Number(prompt("What score is the team trying to reach tonight?"));

console.log(numGames);
console.log(targetScore);

// loop 1 (for loop): counts through each game in the streak
// the if/else if inside flags certain games, like a basketball-themed FizzBuzz
for (var i = 1; i <= numGames; i++) {
    console.log("Game " + i);

    if (i % 3 === 0) {
        console.log("Fizz - back-to-back game");
    } else if (i % 5 === 0) {
        console.log("Buzz - nationally televised game");
    }
}

// loop 2 (while loop): builds up the score 2 points at a time
// until it reaches the target score, counting how many shots it took
var currentScore = 0;
var shotsTaken = 0;

while (currentScore < targetScore) {
    currentScore = currentScore + 2;
    shotsTaken = shotsTaken + 1;
}

console.log("It took " + shotsTaken + " made shots to reach " + currentScore + " points.");
