import {bold} from './animation';

const snacks: string[] = ["chips","cookies","muffins","strawberries","cheetos","brownies"];

export function printSnacks(): void { 
   for(const snack of snacks) {
	console.log(`- ${snack}`);

   }
}

bold("Yum!");
printSnacks();
