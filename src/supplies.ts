// Define array of supplies
const supplies = ["cups", "plates", "streamers", "table"];

// Function for printing supplies
export function printSupplies() {
    console.log(`\x1b[1mThese are the supplies!\x1b[0m`); // Bold
    console.log(supplies);
}

// Print supplies
printSupplies();
