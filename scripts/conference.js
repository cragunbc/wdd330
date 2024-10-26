// API URL where we're pulling the info from
const url = 'https://api-nba-v1.p.rapidapi.com/teams?conference=East';
const options = {
    // Declaring that we're going to get info from an external source
	'method': 'GET',
    // Declaring the host of the API as well as our API Key so we can get the info
	'headers': {
		'x-rapidapi-key': 'e9af37b7admsh7892c3fadadd708p10d1bfjsnf292b2d5fcf5',
		'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
	}
};


// Declare a new function called pullTeamsConference with one parameter of which conference we're wanting to pull from
function pullTeamsConference(conference) {
    // Fetchs the info from the URL and passes in our API Key listed above
    fetch(`https://api-nba-v1.p.rapidapi.com/teams?conference=${conference}`, options)
    // Declares the result above to a variable called "fetchResult and converts it to json
    .then(fetchResult => fetchResult.json())
    .then(teams => displayTeamsByConference(teams.response))
    // Takes the data from the json conversion and prints it in the console
    // Documents any errors that happen with the call
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

// Adds an event listener for when the eastern conference button is selected
// Calls the pullTeams function and passes in the conference to pull
document.getElementById("east").addEventListener("click", function () {
    let conference = "East";
    pullTeamsConference(conference);
});

// Adds an event listener for when the western conference button is selected
// Calls the pullTeams function and passed in the conference to pull
document.getElementById("west").addEventListener("click", function () {
    let conference = "West"
    pullTeamsConference(conference);
});

// Declares a new function to display the teams of the conference and has the parameter of the array of teams
function displayTeamsByConference(teams) {
    // let newArray = teams.filter(team.response, team.logo == true);
    // Selects the element on the html file to display the teams
    let teamDisplay = document.querySelector(".teamDisplay");
    // Clears the page
    teamDisplay.innerHTML = "";
    // Loops through each "team" in the array of "teams" and does the following
    for (let team of teams) {
        // If the team doesn't have a logo it skips it
        if (!team.logo) {
            continue;
        }
        // Creates a section to put the info in
        const teamInfo = document.createElement("section");
        teamInfo.className = "container";
        // Creates an <img> tag to store the team logo
        const teamLogo = document.createElement("img");
        // Creates a <p> tag to store the team name
        const teamName = document.createElement("p");
        
        // Sets the src and alt attributes to the newly created <img> tag from the json data
        teamLogo.setAttribute("src", team.logo);
        teamLogo.setAttribute("alt", team.name);
        // Adds the logo to the section we created above
        teamInfo.appendChild(teamLogo);

        // Sets the name of the team from the json data
        teamName.textContent = team.name;
        // Adds the name to the logo of the team
        teamInfo.appendChild(teamName);

        // Adds the team logo and name to the html page
        teamDisplay.appendChild(teamInfo);

        // Loops through for the next team
    }
}