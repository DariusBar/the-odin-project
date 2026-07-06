// Import all images to be used in the menu
import choco from "./choco.jpg";
import doodle from "./doodle.jpg";
import apple from "./apple.jpg";

import chocodo from "./chocodo.jpg";
import strawdo from "./strawdo.jpg";
import jellydo from "./jellydo.jpg";

import cinn from "./cinn.jpg";
import pump from "./pump.jpg";
import strudel from "./strudel.jpg";


// Creates each food section using the string of
// the id name
function createSection(id) {
    // Create the section
    let section = document.createElement("section");
    section.setAttribute("id", id);
    section.classList.add("items");

    // Add title header to section
    let headerName = id[0].toUpperCase() + id.substring(1);
    let header = document.createElement("h1");
    header.textContent = headerName;
    section.appendChild(header);

    return section;
}

// Creates the div that holds the food cards
function createFoodContainer() {
    let foodContainer = document.createElement("div");
    foodContainer.classList.add("foodContainer");

    return foodContainer;
}

// Creates each foodCard using the string of the 
// file path of the image within it
function createCard(filePath, foodDesc) {
    // Create foodCard div
    let foodCard = document.createElement("div");
    foodCard.classList.add("foodCard");

    // Create a div containing the image of the card
    let imgDiv = document.createElement("div");
    // Create image using filePath
    let foodImg = document.createElement("img");
    foodImg.setAttribute("src", filePath);
    foodImg.classList.add("foodImg");
    // Append img to div
    imgDiv.appendChild(foodImg);

    // Create a div containing the foodDesc
    let descDiv = document.createElement("div");
    descDiv.classList.add("foodDesc");
    let foodHead = document.createElement("h2");
    foodHead.textContent = foodDesc;
    descDiv.appendChild(foodHead);

    // Append both divs to the foodCard
    foodCard.appendChild(imgDiv);
    foodCard.appendChild(foodHead);

    return foodCard;
}

function menuLoad() {
    // Elements to add content to
    const content = document.getElementById("content");
    content.innerHTML = "";

    // Create banner with id banner
    let banner = document.createElement("div");
    // Create p with text inside
    let webName = document.createElement("p");
    webName.textContent = "Pretty Pastries";
    // Append to banner
    banner.appendChild(webName);
    banner.setAttribute("id", "banner");

    content.appendChild(banner);

    // Adding in the menu
    // Adding Popular section and food cards
    let popSection = createSection("popular");
    // food section containing foodcard
    let popContainer = createFoodContainer();
    popContainer.appendChild(createCard(choco, "Choclate Chip Cookies"));
    popContainer.appendChild(createCard(doodle, "Snickerdoodles"));
    popContainer.appendChild(createCard(apple, "Apple Pie"));

    popSection.appendChild(popContainer);

    // Adding donut section and food cards
    let doSection = createSection("donuts");
    // food section containing foodcard
    let doContainer = createFoodContainer();
    doContainer.appendChild(createCard(chocodo, "Chocolate Donuts"));
    doContainer.appendChild(createCard(strawdo, "Strawberry Donuts"));
    doContainer.appendChild(createCard(jellydo, "Jelly Donuts"));

    doSection.appendChild(doContainer);

    // Adding pastry section and food cards
    let pasSection = createSection("popular");
    // food section containing foodcard
    let pasContainer = createFoodContainer();
    pasContainer.appendChild(createCard(cinn, "Cinnamon Rolls"));
    pasContainer.appendChild(createCard(pump, "Pumpkin Pie"));
    pasContainer.appendChild(createCard(strudel, "Apple Strudel"));

    pasSection.appendChild(pasContainer);

    // Append sections to content
    content.appendChild(popSection);
    content.appendChild(doSection);
    content.appendChild(pasSection);
}

export { menuLoad };