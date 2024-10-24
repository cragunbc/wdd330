let usersTeamName = document.querySelector("#fav-team");
let teamName = localStorage.getItem("teamName") || 0;
let noTeamName = true;

function getUsersTeamName() {
    if (noTeamName == true && teamName == 0) {
        let userInput = window.prompt("Please enter your favorite NBA team!");
        usersTeamName.innerHTML = userInput;
        localStorage.setItem("teamName", userInput);
        noTeamName = false;
    } else {
        usersTeamName.innerHTML = teamName;
        noTeamName = false;
    }
}

getUsersTeamName();