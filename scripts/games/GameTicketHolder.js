const contentTarget = document.querySelector(".games")
const eventHub = document.getElementById("state-fair")


/*
// -------------- method 1 & 2 ---------------
// listen for game button event
eventHub.addEventListener("gameTicketPurchased", clickEvent => {
    GameTicketHolders("player");
})
// -------------------------------------------

// ------------- method 1 --------------
// listen for full package button event
// eventHub.addEventListener("fullPkgTicketPurchased", clickEvent => {
//     GameTicketHolders("bigSpender");
// })
// -------------------------------------


// -------------- method 1 & 2 ---------------
export const GameTicketHolders = (colorClass) => {
    contentTarget.innerHTML += `
        <div class="person ${colorClass}"></div>
    `
}
// -------------------------------------------
*/


// ------------------- method 3 --------------------
// listen for game button event
eventHub.addEventListener("gameTicketPurchased", clickEvent => {
    GameTicketHolders();
})

export const GameTicketHolders = () => {
    contentTarget.innerHTML += `
        <div class="person player"></div>
    `
}
// -------------------------------------------------
