/**
 *  FishList which renders individual fish objects as HTML
 */

import { useFish } from './FishDataProvider.js';
import { Fish } from './Fish.js';

export const FishList = () => {

    // Get a reference to the `<article class="fishList">` element
    const contentElement = document.querySelector(".fishList");
    const allTheBigAndSmallFIsh = useFish()

	let fishHTMLRepresentation = "";
	for (const oneThingFromTheSea of allTheBigAndSmallFIsh) {
		fishHTMLRepresentation += Fish(oneThingFromTheSea);
	}
    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        ${fishHTMLRepresentation}
    `
}