let pageVisit = document.querySelector("#page-visits");
number = localStorage.getItem("visits") || 0;

function pageVisits() {
    if (number == 0) {
        pageVisit.innerHTML = "This is your first visit!";
        number++;
        localStorage.setItem("visits", number);
    } else {
        pageVisit.innerHTML = Number(number) + 1;
        number++;
        localStorage.setItem("visits", number)
    }
}

pageVisits();