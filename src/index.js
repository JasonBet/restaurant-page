import "./style.css";
import { home } from "./initial_page_load.js";

const contentDiv = document.querySelector("#content")

contentDiv.appendChild(home())
