import "./style.css";
import { homeLoad } from "./home.js";
import { menuLoad } from "./menu.js";
import { aboutLoad } from "./about.js";

// Add event listeners to each button in the nav
const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const aboutBtn = document.getElementById("aboutBtn");

homeBtn.addEventListener("click", (event) => {
    homeLoad();
}); 

menuBtn.addEventListener("click", (event) => {
    menuLoad(); 
});

aboutBtn.addEventListener("click", (event) => {
    aboutLoad();
});

// Have the homepage loaded in by default
homeLoad();