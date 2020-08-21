/**
 *  FishList which renders individual fish objects as HTML
 */

import { useFish, makeMostHolyFish, makeSoldierFish, makeUnworthy } from './FishDataProvider.js';
import { Fish } from './Fish.js';

export const FishList = () => {
    // const allTheBigAndSmallFIsh = useFish();
	const holyFish = makeMostHolyFish();
	addFishToDom(holyFish);

	const soldiers = makeSoldierFish();
	addFishToDom(soldiers);

	const unworthy = makeUnworthy();
	addFishToDom(unworthy);
	
}

const addFishToDom = (whichFishArray) => {
	const contentElement = document.querySelector(".fishList");
	let fishHTMLRepresentation = "";
	for (const oneThingFromTheSea of whichFishArray) {
		fishHTMLRepresentation += Fish(oneThingFromTheSea);
	}
    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        ${fishHTMLRepresentation}
    `
}