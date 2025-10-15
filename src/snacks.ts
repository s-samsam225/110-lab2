const snacks: string[] = ["chips","cookies","muffins"];
export function printSnacks(): void { 
   for(const snack of snacks) {
	console.log(`- ${snack}`);

   }
}



printSnacks();
