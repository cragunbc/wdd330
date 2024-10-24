const url = 'https://api-nba-v1.p.rapidapi.com/teams';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'e9af37b7admsh7892c3fadadd708p10d1bfjsnf292b2d5fcf5',
		'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
	}
};

function pullAllTeams() {
    fetch(url, options)
    .then(fetchResult => fetchResult.json())
    .then(teams => displayAllTeams(teams.response))
    .catch(error => {
        console.error("Error fetching data:", error);
    });
}


function displayAllTeams(teams) {
    let teamDisplay = document.querySelector(".teamDisplay");
    teamDisplay.innerHTML = "";
    console.log(teams);
    
    for (let team of teams) {
        if(team.nbaFranchise !== true) {
            continue;
        }
        if (team.name === "Home Team Stephen A") {
            continue;
        }

        const teamInfo = document.createElement("section");
        const teamLogo = document.createElement("img");
        teamInfo.className = "teamSelect";
        const teamName = document.createElement("p");
        
        teamLogo.setAttribute("src", team.logo);
        teamLogo.setAttribute("alt", team.name);
        teamInfo.appendChild(teamLogo);
        
        teamName.textContent = team.name;
        
        teamInfo.appendChild(teamName);
        
        teamDisplay.appendChild(teamInfo);

        teamInfo.addEventListener("click", function() {
            window.location.href = "league.html";
            localStorage.setItem("team-id", team.id);
        });
        
    }
}


pullAllTeams();
