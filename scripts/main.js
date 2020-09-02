// Import and invoke the ticket booth component function

// Must import these files so main.js can use their event listners
import { RideTicketHolders } from "./rides/RideTicketHolder.js"
import { FoodTicketHolders } from "./food/FoodTicketHolder.js"
import { GameTicketHolders } from "./games/GameTicketHolder.js"
import { SideshowTicketHolders } from "./sideshows/SideshowTicketHolder.js"
// import "./fullPackage/FullPkgTicketDistributor.js" // ---- method 2 ----
import { FullPkgTicketHolders } from "./fullPackage/FullPkgTicketDistributor.js" // ---- method 3 ----
import { TicketBooth } from "./TicketBooth.js"


TicketBooth();

