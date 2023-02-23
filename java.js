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

// Rank team according to table
function rankTeams() {
  // Get the table element
  var table = document.querySelector("table");

  // Get the rows of the table (excluding the first row, which contains headers)
  var rows = Array.from(table.rows).slice(1);

  // Sort the rows based on the "Winning Games" and "Points" columns
  rows.sort(function(a, b) {
    var aWins = parseInt(a.cells[2].textContent);
    var bWins = parseInt(b.cells[2].textContent);
    if (aWins !== bWins) {
      return bWins - aWins;
    } else {
      var aPoints = parseInt(a.cells[4].textContent);
      var bPoints = parseInt(b.cells[4].textContent);
      return bPoints - aPoints;
    }
  });

  // Update the "Ranking" column based on the sorted order
  rows.forEach(function(row, index) {
    row.cells[0].textContent = index + 1;
  });

  // Re-insert the sorted rows into the table
  rows.forEach(function(row) {
    table.tBodies[0].appendChild(row);
  });
}

// Call the rankTeams function to initially rank the teams
rankTeams();


// Call the sortTeamsByWins and updateRankedTeams functions to calculate and display the ranked positions of the teams
sortTeamsByWins();
updateRankedTeams();

