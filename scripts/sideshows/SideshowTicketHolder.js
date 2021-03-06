const contentTarget = document.querySelector(".sideshow")
const eventHub = document.getElementById("state-fair")

/*
// -------------- method 1 & 2 ---------------
// listen for sideshow button event
const personType = "gawker";
eventHub.addEventListener("sideshowTicketPurchased", clickEvent => {
    SideshowTicketHolders(personType);
})
// -------------------------------------------


// ------------- method 1 --------------
// listen for full package button event
// eventHub.addEventListener("fullPkgTicketPurchased", clickEvent => {
//     SideshowTicketHolders("bigSpender");
// })
// -------------------------------------


// -------------- method 1 & 2 ---------------
export const SideshowTicketHolders = (colorClass) => {
    contentTarget.innerHTML += `
        <div class="person ${colorClass}"></div>
    `
}
// -------------------------------------------
*/


// ------------------- method 3 --------------------
// listen for sideshow button event
eventHub.addEventListener("sideshowTicketPurchased", clickEvent => {
    SideshowTicketHolders();
})

export const SideshowTicketHolders = () => {
    contentTarget.innerHTML += `
        <div class="person gawker"></div>
    `
}
// -------------------------------------------------
