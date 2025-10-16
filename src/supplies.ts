// Import feature function
import {bold} from './animation.ts';

// Define array of supplies
export const supplies = ["cups", "plates", "streamers", "table", "chairs"];

// Function for printing supplies
export function printSupplies() {
    console.log(supplies);
}

// Print supplies
bold("These are the supplies!");
printSupplies();
