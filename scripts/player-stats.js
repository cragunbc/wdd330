const url = 'https://api-nba-v1.p.rapidapi.com/players/statistics?team=1&season=2020';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'e9af37b7admsh7892c3fadadd708p10d1bfjsnf292b2d5fcf5',
		'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
	}
};

let teamID = localStorage.getItem("team-id");

function pullPlayerStats(teamID) {
    fetch(`https://api-nba-v1.p.rapidapi.com/players/?team=${teamID}&season=2023`, options)
    .then(fetchResult => fetchResult.json())
    .then(players => displayPlayerStats(players.response))
    .catch(error => {
        console.error("Error fetching data:", error);
    });
        
}


function displayPlayerStats(players) {
    console.log(players);
    let playerDisplay = document.querySelector(".teamDisplay");
    playerDisplay.innerHTML = "";
    for (let player of players) {
        const playerInfo = document.createElement("section");
        const playerName = document.createElement("h3");
        const playerCountry = document.createElement("p");
        const playerHeight = document.createElement("p");
        const playerCollege = document.createElement("p");
        const playerJersey = document.createElement("p");
        const playerYears = document.createElement("p");

        playerName.innerHTML = `Name: ${player.firstname} ${player.lastname}`;
        playerCountry.innerHTML = `Country: ${player.birth.country}`;
        playerHeight.innerHTML = `Height: ${player.height.feets}' ${player.height.inches}"`;
        playerCollege.innerHTML = `College: ${player.college}`;
        playerJersey.innerHTML = `Jersey #: ${player.leagues.standard.jersey}`;
        playerYears.innerHTML = `Years Pro: ${player.nba.pro}`;

        playerInfo.appendChild(playerName);
        playerInfo.appendChild(playerCountry);
        playerInfo.appendChild(playerCountry);
        playerInfo.appendChild(playerHeight);
        playerInfo.appendChild(playerCollege);
        playerInfo.appendChild(playerJersey);
        playerInfo.appendChild(playerYears);

        playerDisplay.appendChild(playerInfo);
    }
}

pullPlayerStats(teamID);