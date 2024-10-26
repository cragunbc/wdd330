// API URL where we're pulling the info from
const url = 'https://api-nba-v1.p.rapidapi.com/teams?division=Southeast';
const options = {
    // Declaring that we're going to get info from an external source
	method: 'GET',
    // Declaring the host of the API as well as our API Key so we can get the info
	headers: {
		'x-rapidapi-key': 'e9af37b7admsh7892c3fadadd708p10d1bfjsnf292b2d5fcf5',
		'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
	}
};


// Declares a new function called pullTeamsDivision with one parameter of what division we're wanting to pull from
function pullTeamsDivision(division) {
    fetch(`https://api-nba-v1.p.rapidapi.com/teams?division=${division}`, options)
    // Delcares the result above to a variable called fetchResult and converts it to json
    .then(fetchResult => fetchResult.json())
    .then(teams => displayTeamsByDivision(teams.response))
    // .then(data => console.log(data))
    .catch(error => {
        console.error("Error fetching data:", error);
    });
}


document.getElementById("atlantic").addEventListener("click", function() {
    let division = "Atlantic";
    pullTeamsDivision(division);
});

document.getElementById("central").addEventListener("click", function() {
    let division = "Central";
    pullTeamsDivision(division);
});

document.getElementById("southeast").addEventListener("click", function() {
    let division = "Southeast";
    pullTeamsDivision(division);
});

document.getElementById("northwest").addEventListener("click", function() {
    let division = "Northwest";
    pullTeamsDivision(division);
});

document.getElementById("pacific").addEventListener("click", function() {
    let division = "Pacific";
    pullTeamsDivision(division);
});

document.getElementById("southwest").addEventListener("click", function() {
    let division = "Southwest";
    pullTeamsDivision(division);
});



function displayTeamsByDivision(teams) {
    let teamDisplay = document.querySelector(".teamDisplay");
    teamDisplay.innerHTML = "";

    for (let team of teams) {
        if (!team.logo) {
            return;
        }
        const teamInfo = document.createElement("section");
        teamInfo.className = "container";
        const teamLogo = document.createElement("img");
        const teamName = document.createElement("p");

        teamLogo.setAttribute("src", team.logo);
        teamLogo.setAttribute("alt", team.name);

        teamInfo.appendChild(teamLogo);

        teamName.textContent = team.name;
        teamInfo.appendChild(teamName);
        teamDisplay.appendChild(teamInfo);
    }
}