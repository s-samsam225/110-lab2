
import {bold} from "./animation.ts";
const snacks: string[] = ["chips","cookies","muffins"];
export function printSnacks(): void { 
   for(const snack of snacks) {
	console.log(`- ${snack}`);

   }
}

bold();
printSnacks();
