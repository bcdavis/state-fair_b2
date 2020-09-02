
// ------------- method 2 -------------
// import { RideTicketHolders } from "../rides/RideTicketHolder.js"
// import { FoodTicketHolders } from "../food/FoodTicketHolder.js"
// import { GameTicketHolders } from "../games/GameTicketHolder.js"
// import { SideshowTicketHolders } from "../sideshows/SideshowTicketHolder.js"
// ------------------------------------


const eventHub = document.getElementById("state-fair")

const personType = "bigSpender";
eventHub.addEventListener("fullPkgTicketPurchased", clickEvent => {
// ------------ method 2 --------------
    // RideTicketHolders(personType);
    // FoodTicketHolders(personType);
    // GameTicketHolders(personType);
    // SideshowTicketHolders(personType);
// ------------------------------------

// --------------- method 3 -----------------
    FullPkgTicketHolders(personType);
// ------------------------------------------
})


// --------------- method 3 -----------------
// listen for full package button event
export const FullPkgTicketHolders = (pt) => {
    let contentTarget = document.querySelector(".rides");
    contentTarget.innerHTML += `
        <div class="person ${pt}"></div>
    `
    contentTarget = document.querySelector(".food");
    contentTarget.innerHTML += `
        <div class="person ${pt}"></div>
    `
    contentTarget = document.querySelector(".games");
    contentTarget.innerHTML += `
        <div class="person ${pt}"></div>
    `
    contentTarget = document.querySelector(".sideshow");
    contentTarget.innerHTML += `
        <div class="person ${pt}"></div>
    `
}
// ------------------------------------------