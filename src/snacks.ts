
import {bold} from "./animation";
const snacks: string[] = ["chips","cookies","muffins","trail mix","fruit cups","candy","strawberries","cheetos","brownies"];

export function printSnacks(): void { 
   for(const snack of snacks) {
	console.log(`- ${snack}`);

   }
}


bold("Yum!");
printSnacks();
