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
const btnGerar = document.querySelector("#btnGerar");
btnGerar.addEventListener("click", makeUser);

function makeUser() {
    fetch("https://randomuser.me/api/?results=1")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let userName = document.querySelector("#userName");
        let imgUser = document.querySelector("#imgUser");
        let userAddress = document.querySelector("#userAddress");
        let userFone = document.querySelector("#userFone");
        let userMail = document.querySelector("#userMail");
        let user = data.results[0];
        let name = `${user.name.title} ${user.name.first} ${user.name.last}`;
        let userImgLarge = user.picture.large;
        let adress = user.location;

        imgUser.setAttribute("src", userImgLarge);
        userName.innerText = name;
        userAddress.innerText = `Rua ${adress.street.name}, ${adress.street.number} - Cidade: ${adress.city} - Estado: ${adress.state} - País: ${adress.country}`;
        userFone.innerText = `Telefone: ${user.phone}`;
        userMail.innerText = `E-mail: ${user.email}`;
    })
    .catch((error) => {
        console.log("Error");
        console.log(error);
        userName.innerText = "Error, try again please"
    })
}

