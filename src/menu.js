export function menu() {
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("main-container");

    const heading = document.createElement("h1");
    heading.classList.add("heading");
    heading.textContent = "Menu";

    const appsDiv = document.createElement("div");
    appsDiv.classList.add("menu-divs"); // Specific class to align sub-headings for menu
    const appsHead = document.createElement("h2");
    appsHead.textContent = "Appetizers";
    appsDiv.appendChild(appsHead);

    const app1Div = document.createElement("div");
    const app1Name = document.createElement("h3");
    app1Name.textContent = "Shareable Wings";
    const app1Info = document.createElement("p");
    app1Info.textContent = "5 Drums, 5 Flats, AND 5 Boneless shareable wings & ranch. Chose up to 3 "
        + "flavors: Honey BBQ, Medium, Lemon Pepper, Garlic Parm";
    const app1PriceAndImgDiv = document.createElement("div");
    app1PriceAndImgDiv.classList.add("price-and-pic");
    const app1Price = document.createElement("p");
    app1Price.classList.add("price");
    app1Price.textContent = "$12";
    const app1PhotoPlaceholder = document.createElement("div");
    app1PhotoPlaceholder.classList.add("img-placeholder");
    const app1PlaceholderText = document.createElement("p");
    app1PlaceholderText.textContent = "IMG";
    app1PhotoPlaceholder.appendChild(app1PlaceholderText);
    
    app1PriceAndImgDiv.appendChild(app1Price);
    app1PriceAndImgDiv.appendChild(app1PhotoPlaceholder);


    app1Div.appendChild(app1Name);
    app1Div.appendChild(app1Info);
    app1Div.appendChild(app1PriceAndImgDiv);
    
    
    





    menuContainer.appendChild(heading);
    menuContainer.appendChild(appsDiv);
    menuContainer.appendChild(app1Div);

    return menuContainer;
}