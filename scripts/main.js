console.log("You are terrific");
import { useFish } from './FishDataProvider.js';
import { FishList } from './FishList.js';


const allTheFish = useFish();
console.log("all the fish", allTheFish);

for (const taco of allTheFish) {
    console.log("the item is", taco);
}

FishList();