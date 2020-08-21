
import { useFish, mostHolyFish, soldierFish, unHolyFish } from "./FishDataProvider.js";
import { Fish } from "./Fish.js";

/**
 *  FishList which renders individual fish objects as HTML
 */

export const FishList = () => {
    

    // Get a reference to the `<div class="fishList">` element
    const contentElement = document.querySelector(".fishList"); // targets a certain tag in HTML
    const fishes = useFish()

    // sort all fish by nobility to the Holy Fish Jutz'kar
    const nobles = mostHolyFish(fishes);
    console.log("nobles: ", nobles);// -------- show the nobles in console
    const soldiers = soldierFish(fishes);
    console.log("soldiers: ", soldiers); // --- show soldiers in console
    const peasants = unHolyFish(fishes);
    console.log("peasants: ", peasants);// ---- show peasants in console

    const fishHeirarchy = nobles.concat(soldiers, peasants); // combine all three arrays in order
    console.log("fishHeriarchy: ", fishHeirarchy);

    let fishHTMLRepresentation = "";
    for (const fish of fishHeirarchy) {
        fishHTMLRepresentation += Fish(fish);
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        ${fishHTMLRepresentation}
    `
}