
const contentTarget = document.querySelector(".entry")
const eventHub = document.getElementById("state-fair")

// ---------------- Ride Ticket Click ------------------
eventHub.addEventListener("click", event => {
    // check if clicked on Ride Ticket Button
    if (event.target.id === "rideTicket") {
        console.log("I want a ticket to ride!");
        const rideEvent = new CustomEvent("rideTicketPurchased", {
            detail: {
                ticketType: "ride", // not necessary
                ticketQuantity: 1 // maybe alter this later
            }
        })
        eventHub.dispatchEvent(rideEvent)
    }
})

// ---------------- Food Ticket Click ------------------
eventHub.addEventListener("click", event => {
    // check if clicked on Food Ticket Button
    if (event.target.id === "foodTicket") {
        console.log("I want a ticket to eat!");
        const foodEvent = new CustomEvent("foodTicketPurchased", {
            detail: {
                ticketType: "food", // not necessary
                ticketQuantity: 1 // maybe alter this later
            }
        })
        eventHub.dispatchEvent(foodEvent)
    }
})

// ---------------- Game Ticket Click ------------------
eventHub.addEventListener("click", event => {
    // check if clicked on Ride Ticket Button
    if (event.target.id === "gameTicket") {
        console.log("I want a ticket to play a game!");
        const gameEvent = new CustomEvent("gameTicketPurchased", {
            detail: {
                ticketType: "game", // not necessary
                ticketQuantity: 1 // maybe alter this later
            }
        })
        eventHub.dispatchEvent(gameEvent)
    }
})

// ---------------- Sideshow Ticket Click ------------------
eventHub.addEventListener("click", event => {
    // check if clicked on Ride Ticket Button
    if (event.target.id === "sideshowTicket") {
        console.log("I want a ticket to see a sideshow!");
        const sideshowEvent = new CustomEvent("sideshowTicketPurchased", {
            detail: {
                ticketType: "sideshow", // not necessary
                ticketQuantity: 1 // maybe alter this later
            }
        })
        eventHub.dispatchEvent(sideshowEvent)
    }
})

// ---------------- Full Package Ticket Click ------------------ (methods 1, 2, & 3)
eventHub.addEventListener("click", event => {
    // check if clicked on Ride Ticket Button
    if (event.target.id === "fullPkgTicket") {
        console.log("I want a ticket to do everything!");
        const fullPkgEvent = new CustomEvent("fullPkgTicketPurchased", {
            detail: {
                ticketType: "fullPackage", // not necessary
                ticketQuantity: 1 // maybe alter this later
            }
        })
        eventHub.dispatchEvent(fullPkgEvent)
    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
            <button id="gameTicket">Game Ticket</button>
            <button id="sideshowTicket">Sideshow Ticket</button>
            <button id="fullPkgTicket">Full Package Ticket</button>
        </div>
    `
}

