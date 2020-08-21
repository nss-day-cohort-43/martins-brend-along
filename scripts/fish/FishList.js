
import { useFish } from "./FishDataProvider.js";
import { Fish } from "./Fish.js";

/**
 *  FishList which renders individual fish objects as HTML
 */

export const FishList = () => {

    // Get a reference to the `<div class="fishList">` element
    const contentElement = document.querySelector(".fishList"); // targets a certain tag in HTML
    const fishes = useFish()

    let fishHTMLRepresentation = "";
    for (const fish of fishes) {
        fishHTMLRepresentation += Fish(fish);
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        ${fishHTMLRepresentation}
    `
}