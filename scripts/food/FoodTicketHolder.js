const contentTarget = document.querySelector(".food")
const eventHub = document.getElementById("state-fair")

/*
// -------------- method 1 & 2 ---------------
// listen for food button event
eventHub.addEventListener("foodTicketPurchased", clickEvent => {
    FoodTicketHolders("eater");
})
// -------------------------------------------

// ------------- method 1 --------------
// listen for full package button event
// eventHub.addEventListener("fullPkgTicketPurchased", clickEvent => {
//     FoodTicketHolders("bigSpender");
// })
// -------------------------------------

// ------------- method 1 & 2 ----------------
export const FoodTicketHolders = (colorClass) => {
    contentTarget.innerHTML += `
        <div class="person ${colorClass}"></div>
    `
}
// -------------------------------------------
*/


// ------------------- method 3 --------------------
// listen for food button event
eventHub.addEventListener("foodTicketPurchased", clickEvent => {
    FoodTicketHolders();
})

export const FoodTicketHolders = () => {
    contentTarget.innerHTML += `
        <div class="person eater"></div>
    `
}
// -------------------------------------------------

