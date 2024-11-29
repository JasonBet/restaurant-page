import "./style.css";
import { home } from "./initial_page_load.js";
import { menu } from "./menu.js";
import { contact } from "./contact.js";

const contentDiv = document.querySelector("#content")

const nav = document.querySelector("nav")
const buttonList = nav.querySelectorAll("button");

buttonList.forEach((button, index) => {
    button.dataset.buttonNum = index;
});

contentDiv.appendChild(home());

let currentContent = contentDiv.firstChild;
nav.addEventListener("click", (e) => { 
    let newContent;
    if(Number(e.target.dataset.buttonNum) === 0){
        console.log("clicked home");
        newContent = home();
    } else if(Number(e.target.dataset.buttonNum) === 1){
        console.log("clicked menu");
        newContent = menu();
    } else if(Number(e.target.dataset.buttonNum) === 2){
        console.log("clicked contact");
        newContent = contact()
    }

    contentDiv.replaceChild(newContent, currentContent);
    contentDiv.innerHTML = "";
    contentDiv.appendChild(newContent);
    currentContent = newContent;
})


