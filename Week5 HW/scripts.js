// theme: basketball stats

// 5 variables, mix of strings, numbers, and a boolean
var playerName = "LeBron James";
var team = "Lakers";
var pointsPerGame = 25;
var assistsPerGame = 8;
var isAllStar = true;

console.log(playerName);
console.log(team);
console.log(pointsPerGame);
console.log(assistsPerGame);
console.log(isAllStar);

// math operations
var totalStats = pointsPerGame + assistsPerGame;
var doublePoints = pointsPerGame * 2;

console.log(totalStats);
console.log(doublePoints);

// string concatenations
var fullInfo = playerName + " plays for the " + team;
var statLine = playerName + " averages " + pointsPerGame + " points a game";

console.log(fullInfo);
console.log(statLine);

// this line adds a paragraph onto the webpage showing a result
document.body.innerHTML += "<p>Result: " + totalStats + "</p>";
