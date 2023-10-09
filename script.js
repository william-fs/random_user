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
