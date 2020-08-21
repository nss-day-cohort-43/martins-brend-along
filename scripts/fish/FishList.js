/**
 *  FishList which renders individual fish objects as HTML
 */

// Import the different scripts to generate the HTML
import { sortMostHolyFish, sortSoldierFish, sortUnworthyFish } from "./FishDataProvider.js";
import { Fish } from "./Fish.js";

export const FishList = () => {
    const holyFish = sortMostHolyFish();
    console.log("HOLY FISH ARRAY??", holyFish);
    addFishToDom(holyFish);

    const soldierFish = sortSoldierFish();
    addFishToDom(soldierFish);

    const unworthyFish = sortUnworthyFish();
    addFishToDom(unworthyFish);
};

//Add fish, goes to the DOM, sees where we should place the HTML,
//Then it loops through the array of objects we pass in (this is the for loop)
//
const addFishToDom = (whichFishArray) => {
    // Get a reference to the `<tag class="fishList">` element
    // so we can place the fish where we want.
    const contentElement = document.querySelector(".fishList");

     // Generate all of the HTML for the fish
    let fishHTMLRepresentation = "";
    for (const fish of whichFishArray) {
        fishHTMLRepresentation += Fish(fish);
    }
    
    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        ${fishHTMLRepresentation}
     `
};