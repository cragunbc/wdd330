let userName = document.querySelector("#user-name");
let name = localStorage.getItem("name") || 0;
let firstVisit = true;

function getUsersName() {
    if (firstVisit == true && name == 0) {
        let userInput = window.prompt("Please enter your name!");
        userName.innerHTML = userInput;
        localStorage.setItem("name", userInput);
        firstVisit = false;
    } else {
        userName.innerHTML = name;
        firstVisit = false;
    }
}

getUsersName();