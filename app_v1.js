let onePoint = 1
let twoPoints = 2
let threePoints = 3
points = 0

function add1PointToTeamOne() {
    let teamOneScore = document.getElementById("teamOneScore")
    points += onePoint
    teamOneScore.innerText = points
}

function add2PointsToTeamOne() {
    let teamOneScore = document.getElementById("teamOneScore")
    points += twoPoints
    teamOneScore.innerText = points
}

function add3PointsToTeamOne() {
    let teamOneScore = document.getElementById("teamOneScore")
    points += threePoints
    teamOneScore.innerText = points}

function add1PointToTeamTwo() {
    let teamTwoScore = document.getElementById("teamTwoScore")
    points += onePoint
    teamTwoScore.innerText = points
}

function add2PointsToTeamTwo() {
    let teamTwoScore = document.getElementById("teamTwoScore")
    points += twoPoints
    teamTwoScore.innerText = points
}

function add3PointsToTeamTwo() {
    let teamTwoScore = document.getElementById("teamTwoScore")
    points += threePoints
    teamTwoScore.innerText = points
}

function resetScore() {
    points = 0
    let teamOneScore = document.getElementById("teamOneScore")
    let teamTwoScore = document.getElementById("teamTwoScore")
    teamOneScore.innerText = points
    teamTwoScore.innerText = points
}