/**
 *  FishList which renders individual fish objects as HTML
 */

import { useFish } from './FishDataProvider.js';
import { Fish } from './Fish.js';

export const FishList = () => {
	// Get a reference to the `<article class="content">` element
	const contentElement = document.querySelector('.fishList');
	const fishes = useFish();

	// Add to the existing HTML in the content element
	contentElement.innerHTML += `
    
        ${fishes.map((fish) => Fish(fish)).join('')}
    `;
};
