/**
 *  FishList which renders individual fish objects as HTML
 */

// Import the different scripts to generate the HTML
import { useFish } from "./FishDataProvider.js";
import { Fish } from "./Fish.js";

export const FishList = () => {

    // Get a reference to the `<article class="fishList">` element
    // so we can place the fish where we want.
    const contentElement = document.querySelector(".fishList")
    // This is the loop of all the fish in the array.
    const fishes = useFish()

    // Generate all of the HTML for the fish
    let fishHTMLRepresentation = "";
    for (const fish of fishes) {
        fishHTMLRepresentation += Fish(fish);
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        ${fishHTMLRepresentation}
    `
};