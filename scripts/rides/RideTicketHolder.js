const contentTarget = document.querySelector(".rides")
const eventHub = document.getElementById("state-fair")

/*
// -------------- method 1 & 2 ---------------
// listen for ride button event
eventHub.addEventListener("rideTicketPurchased", clickEvent => {
    RideTicketHolders("rider");
})
// -------------------------------------------

// ------------- method 1 --------------
// listen for full package button event
// eventHub.addEventListener("fullPkgTicketPurchased", clickEvent => {
//     RideTicketHolders("bigSpender");
// })
// -------------------------------------

// ------------- method 1 & 2 ----------------
export const RideTicketHolders = (colorClass) => {
    contentTarget.innerHTML += `
        <div class="person ${colorClass}"></div>
    `
}
// -------------------------------------------
*/


// ------------------- method 3 --------------------
// listen for ride button event
eventHub.addEventListener("rideTicketPurchased", clickEvent => {
    RideTicketHolders();
})


export const RideTicketHolders = () => {
    contentTarget.innerHTML += `
        <div class="person rider"></div>
    `
}
// -------------------------------------------------

