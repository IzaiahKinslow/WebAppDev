// Week 9 - Reusable Functions



function greetPlayer() {
    let playerName = prompt("What is the player's name?");
    console.log("Welcome, " + playerName + "!");
}


function addUpPoints(games, pointsPerGame) {
    let total = 0;

    // loop runs once for every game and adds that game's points to the total
    for (let i = 1; i <= games; i++) {
        total = total + pointsPerGame;
    }

    return total;
}


function showSeasonReport(games, pointsPerGame) {
    let seasonTotal = addUpPoints(games, pointsPerGame);

    console.log("Games played: " + games);
    console.log("Points per game: " + pointsPerGame);
    console.log("Season total: " + seasonTotal + " points");
}

// main program 


greetPlayer();

// collect the user input 
let numGames = Number(prompt("How many games did the player play?"));
let ppg = Number(prompt("How many points per game did the player score?"));

// call function 3
showSeasonReport(numGames, ppg);

// call function 2 
let halfSeason = addUpPoints(numGames / 2, ppg);
console.log("Halfway through the season: " + halfSeason + " points");
