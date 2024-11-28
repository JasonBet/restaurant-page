// Initial Page-load function
export function home() {
    const homeContainer = document.createElement("div");

    const name = document.createElement("h1");
    name.textContent = "CRUNCHY CRISPY CHICKEN";
    
    const intro = document.createElement("p");
    intro.textContent = "Come on o'er and try the CRUNCHIEST, CRISPIEST, CHICKENIEST Chicken " +
        "you've ever had!";

    homeContainer.appendChild(name);
    homeContainer.appendChild(intro);


    
    return homeContainer;
}
