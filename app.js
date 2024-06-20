let teamOneScoreElement = document.getElementById("teamOneScore");
let teamTwoScoreElement = document.getElementById("teamTwoScore");

let points = 0;

function updateScore(element, pointsToAdd) {
    points += pointsToAdd;
    element.innerText = points;
}

function addPointsToTeam(teamNumber, pointsToAdd) {
    if (teamNumber === 1) {
        updateScore(teamOneScoreElement, pointsToAdd);
    } else if (teamNumber === 2) {
        updateScore(teamTwoScoreElement, pointsToAdd);
    } else {
        console.error("Invalid team number");
    }
}

function resetScore() {
    points = 0;
    teamOneScoreElement.innerText = points;
    teamTwoScoreElement.innerText = points;
}

// Example usage
addPointsToTeam(1, 1); // Adds 1 point to Team One
addPointsToTeam(2, 2); // Adds 2 points to Team Two
resetScore(); // Resets scores
