// Define an array of objects for each team, with properties for team name and number of winning games
const teams = [
  { name: "CLB yeu me", wins: 3 },
  { name: "Team nguoi Uc noi tieng Viet", wins: 2 },
  { name: "Ton of happiness", wins: 0 },
  { name: "Ga ran tai chanh", wins: 1 },
  { name: "Araignee", wins: 1 },
  { name: "AK47", wins: 1 },
  { name: "11TH2", wins: 1 },
  { name: "3 chang linh ngu lam", wins: 2 },
  { name: "OK", wins: 1 },
  { name: "Biet doi phong chong tham nhung", wins: 2 },
  { name: "CLB lay lai niem tin", wins: 1 },
];

// Define a function to sort the teams in descending order based on their number of winning games
function sortTeamsByWins() {
  teams.sort((a, b) => b.wins - a.wins);
}

// Define a function to update the ranked positions of the teams in the HTML list
function updateRankedTeams() {
  const rankedTeamsList = document.getElementById("ranked-teams");
  for (let i = 0; i < teams.length; i++) {
    const teamElement = document.getElementById(`team${i + 1}`);
    teamElement.innerHTML = `${i + 1}. ${teams[i].name} (${teams[i].wins} wins)`;
    rankedTeamsList.appendChild(teamElement);
  }
}

// Call the sortTeamsByWins and updateRankedTeams functions to calculate and display the ranked positions of the teams
sortTeamsByWins();
updateRankedTeams();

// JavaScript code to generate more basketballs 
function addBalls() {
  // Create 10 new basketball elements
  for (let i = 0; i < 10; i++) {
    const ball = document.createElement("img");
    ball.src = "basketball.png";
    ball.alt = "Basketball";
    ball.className = "basketball";

    // Set random position and delay for each basketball
    const left = Math.random() * window.innerWidth;
    const top = Math.random() * window.innerHeight;
    ball.style.left = left + "px";
    ball.style.top = top + "px";
    ball.style.animationDelay = Math.random() * 5 + "s";

    // Add each basketball to the document
    document.body.appendChild(ball);
  }
}

// Call the function to add the basketballs on page load
addBalls();
