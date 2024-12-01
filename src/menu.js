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

    // Appetizers
    const app1Div = document.createElement("div");
    const app1Name = document.createElement("h3");
    app1Name.textContent = "Shareable Wings";
    const app1Info = document.createElement("p");
    app1Info.textContent = "5 Drums, 5 Flats, AND 5 Boneless shareable wings & ranch. Chose up to 3 "
        + "flavors: Honey BBQ, Medium, Lemon Pepper, Garlic Parm";
    const app1PriceAndImgDiv = document.createElement("div"); // allow price and img to stay inline
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
    

    const app2Div = document.createElement("div");
    const app2Name = document.createElement("h3");
    app2Name.textContent = "Chicken Tacos";
    const app2Info = document.createElement("p");
    app2Info.textContent = "10 grilled chicken tacos with onion, tomato, and cheese. "
        + "salsa: Pico De Gallo, Medium, Habanera Hot";
    const app2PriceAndImgDiv = document.createElement("div"); // allow price and img to stay inline
    app2PriceAndImgDiv.classList.add("price-and-pic");
    const app2Price = document.createElement("p");
    app2Price.classList.add("price");
    app2Price.textContent = "$15";
    const app2PhotoPlaceholder = document.createElement("div");
    app2PhotoPlaceholder.classList.add("img-placeholder");
    const app2PlaceholderText = document.createElement("p");
    app2PlaceholderText.textContent = "IMG";
    app2PhotoPlaceholder.appendChild(app2PlaceholderText);
    
    app2PriceAndImgDiv.appendChild(app2Price);
    app2PriceAndImgDiv.appendChild(app2PhotoPlaceholder);


    app2Div.appendChild(app2Name);
    app2Div.appendChild(app2Info);
    app2Div.appendChild(app2PriceAndImgDiv);
    

    const mainsDiv = document.createElement("div");
    mainsDiv.classList.add("menu-divs"); // Specific class to align sub-headings for menu
    const mainsHead = document.createElement("h2");
    mainsHead.textContent = "Mains";
    mainsDiv.appendChild(mainsHead);

    // Mains
    const main1Div = document.createElement("div");
    const main1Name = document.createElement("h3");
    main1Name.textContent = "Thighs 'n Fries";
    const main1Info = document.createElement("p");
    main1Info.textContent = "Classic crispy fried thighs with a large side of fries";
    const main1PriceAndImgDiv = document.createElement("div"); // allow price and img to stay inline
    main1PriceAndImgDiv.classList.add("price-and-pic");
    const main1Price = document.createElement("p");
    main1Price.classList.add("price");
    main1Price.textContent = "$16";
    const main1PhotoPlaceholder = document.createElement("div");
    main1PhotoPlaceholder.classList.add("img-placeholder");
    const main1PlaceholderText = document.createElement("p");
    main1PlaceholderText.textContent = "IMG";
    main1PhotoPlaceholder.appendChild(main1PlaceholderText);
    
    main1PriceAndImgDiv.appendChild(main1Price);
    main1PriceAndImgDiv.appendChild(main1PhotoPlaceholder);

    main1Div.appendChild(main1Name);
    main1Div.appendChild(main1Info);
    main1Div.appendChild(main1PriceAndImgDiv);

    menuContainer.appendChild(heading);
    menuContainer.appendChild(appsDiv);
    menuContainer.appendChild(app1Div);
    menuContainer.appendChild(app2Div);
    menuContainer.appendChild(mainsDiv);
    menuContainer.appendChild(main1Div);

    return menuContainer;
}