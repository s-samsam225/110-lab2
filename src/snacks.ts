
import {bold} from "./animation";
export const snacks: string[] = ["chips","cookies","muffins","trail mix","fruit cups","candy"];
export function printSnacks(): void { 
   for(const snack of snacks) {
	console.log(`- ${snack}`);

   }
}

bold();
printSnacks();
