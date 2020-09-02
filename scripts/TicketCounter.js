

const visitorTarget = document.querySelector(".customers");
const eventHub = document.getElementById("state-fair");

// module-level state variable: 
const totalTicketCounter = {
    count: 0
}

// Ticket button listeners
eventHub.addEventListener("rideTicketPurchased", clickEvent => {
    updateTicketTotal(clickEvent.detail.ticketQuantity);
})

eventHub.addEventListener("foodTicketPurchased", clickEvent => {
    updateTicketTotal(clickEvent.detail.ticketQuantity);
})

eventHub.addEventListener("sideshowTicketPurchased", clickEvent => {
    updateTicketTotal(clickEvent.detail.ticketQuantity);
})

eventHub.addEventListener("gameTicketPurchased", clickEvent => {
    updateTicketTotal(clickEvent.detail.ticketQuantity);
})

eventHub.addEventListener("fullPkgTicketPurchased", clickEvent => {
    updateTicketTotal(clickEvent.detail.ticketQuantity);
})




// add tickets and render
const updateTicketTotal = (ticket) => {
    totalTicketCounter.count += ticket;
    ShowTicketTotal();
}

// render on startup
export const ShowTicketTotal = () => {
    visitorTarget.innerHTML = `
    <div class="customers">Total tickets purchased: ${totalTicketCounter.count}</div>
`
}