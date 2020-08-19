import { useFish } from "./FishDataProvider.js";
console.log("main.js is connected correctly");
const allTheFish = useFish();
console.log("All the fish", allTheFish);
for (const fish of allTheFish) {
	console.log(fish);
}
