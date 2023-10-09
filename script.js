// Ligh/Dark Mode

let modeColor = document.querySelector("#mode-color");
let checkCenter = document.querySelector(".check-center");
let lightIcon = document.querySelector(".light-icon");
let darkIcon = document.querySelector(".dark-icon");


modeColor.addEventListener("change", (event) => {
    if(event.currentTarget.checked) {
        checkCenter.classList.add("_in");
        document.documentElement.classList.add("darkMode");
        lightIcon.classList.remove("_in");
        darkIcon.classList.add("_in");
    } else {
        checkCenter.classList.remove("_in");
        document.documentElement.classList.remove("darkMode");
        lightIcon.classList.add("_in");
        darkIcon.classList.remove("_in");
    }
})

// Consumo API fake user 
fetch("https://randomuser.me/api/?results=1")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let user = data.results[0];
        let name = `${user.name.title} ${user.name.first} ${user.name.last}`;
        console.log(name);
    })
