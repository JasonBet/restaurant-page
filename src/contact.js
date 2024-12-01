export function contact() {
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("main-container");

    const heading = document.createElement("h1");
    heading.classList.add("heading");
    heading.textContent = "Contact Us";

    const contact1Div = document.createElement("div");
    const contact1Head = document.createElement("h2");
    contact1Head.textContent = "Restaurant";
    const contact1Info = document.createElement("p");
    contact1Info.textContent = "(555) 123-4567 crunchycrispychicken@fakemail.com";
    contact1Div.appendChild(contact1Head);
    contact1Div.appendChild(contact1Info);

    const contact2Div = document.createElement("div");
    const contact2Head = document.createElement("h2");
    contact2Head.textContent = "Corporate";
    const contact2Info = document.createElement("p");
    contact2Info.textContent = "(555) 765-4321 corporateCCChicken@fakemail.com";
    contact2Div.appendChild(contact2Head);
    contact2Div.appendChild(contact2Info);

    const addressDiv = document.createElement("div");
    const addressHead = document.createElement("h2");
    addressHead.textContent = "Mailing Address";
    const addressInfo = document.createElement("p");
    addressInfo.textContent = "PO Box 123, Randomville, HI 99999";
    addressDiv.appendChild(addressHead);
    addressDiv.appendChild(addressInfo);
    
    contactContainer.appendChild(heading);
    contactContainer.appendChild(contact1Div);
    contactContainer.appendChild(contact2Div);
    contactContainer.appendChild(addressDiv);

    return contactContainer;
}