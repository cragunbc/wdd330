const url = 'https://api-nba-v1.p.rapidapi.com/games?season=2023&team=1';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'e9af37b7admsh7892c3fadadd708p10d1bfjsnf292b2d5fcf5',
		'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
	}
};

let teamID = localStorage.getItem("team-id");

function pullTeamSchedule(teamID) {
    fetch(`https://api-nba-v1.p.rapidapi.com/games?season=2023&team=${teamID}`, options)
    .then(fetchResult => fetchResult.json())
    .then(games => displayTeamGames(games.response))
    .catch(error => {
        console.error("Error fetching data:", error);
    });

}

function displayTeamGames(games) {
    console.log(games);
    let scheduleDisplay = document.querySelector(".teamDisplay");
    scheduleDisplay.innerHTML = "";
    for (let game of games) {
        const date = new Date(game.date.start);
        const formatDate = date.toLocaleDateString('en-US');
        const gameInfo = document.createElement("section");
        const date1 = document.createElement("h4");
        const teams = document.createElement("p");
        const points = document.createElement("p");



        date1.innerHTML = `Date: ${formatDate}`;
        teams.innerHTML = `${game.teams.home.name} vs ${game.teams.visitors.name}`;
        points.innerHTML = `${game.scores.home.points} - ${game.scores.visitors.points}`;

        gameInfo.appendChild(date1);
        gameInfo.appendChild(teams);
        gameInfo.appendChild(points);

        scheduleDisplay.appendChild(gameInfo);


    }
}


pullTeamSchedule(teamID);