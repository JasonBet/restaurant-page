// Initial Page-load function
export function home() {
    // Module will return this one container that has all elements appended to it
    const homeContainer = document.createElement("div");
    homeContainer.classList.add("main-container");

    const name = document.createElement("h1");
    name.textContent = "CRUNCHY CRISPY CHICKEN";
    
    const introDiv = document.createElement("div");
    const intro = document.createElement("p");
    intro.textContent = "Come on o'er and try the CRUNCHIEST, CRISPIEST, CHICKENIEST Chicken " +
        "you've ever had!";
    introDiv.appendChild(intro);
    
    const hoursDiv = document.createElement("div");
    const hoursHead = document.createElement("h2");
    hoursHead.textContent = "Hours";
    const hours = document.createElement("ul");
    hours.setAttribute("role", "list");
    const sunday = document.createElement("li");
    sunday.textContent = "Sunday: 10am - 10pm";
    const monday = document.createElement("li");
    monday.textContent = "Monday: 10am - 10pm";
    const tuesday = document.createElement("li");
    tuesday.textContent = "Tuesday: 10am - 10pm";
    const wednesday = document.createElement("li");
    wednesday.textContent = "Wednesday: 10am - 10pm";
    const thursday = document.createElement("li");
    thursday.textContent = "Thursday: 10am - 10pm";
    const friday = document.createElement("li");
    friday.textContent = "Friday: 10am - 12am";
    const saturday = document.createElement("li");
    saturday.textContent = "Saturday: 10am - 12am";
    
    // Appending list items to hours UL
    hours.appendChild(sunday);
    hours.appendChild(monday);
    hours.appendChild(tuesday);
    hours.appendChild(wednesday);
    hours.appendChild(thursday);
    hours.appendChild(friday);
    hours.appendChild(saturday);

    // Appending hours heading and UL to hours div
    hoursDiv.appendChild(hoursHead);
    hoursDiv.appendChild(hours);

    const locationDiv = document.createElement("div");
    const locationHead = document.createElement("h2");
    const locationAddress = document.createElement("p");
    locationHead.textContent = "Location";
    locationAddress.textContent = "123 Fake Road, Pretend Town, CA";

    locationDiv.appendChild(locationHead);
    locationDiv.appendChild(locationAddress);
    

    homeContainer.appendChild(name);
    homeContainer.appendChild(introDiv);
    homeContainer.appendChild(hoursDiv);
    homeContainer.appendChild(locationDiv);

    return homeContainer;
}
