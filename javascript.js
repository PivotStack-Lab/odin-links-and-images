function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "You clicked the button!";
    document.body.appendChild(para);
}

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
    button.addEventListener("click", createParagraph);
}

let admin;
let name = "John";

admin = name;
alert(admin);

let homePlanet = "Earth"; //should jhave used ourPlanetName or something similar

let currentUser = "John"; //should have gone with currentUserName, it's okay to have longer variable names due to autocomplete

