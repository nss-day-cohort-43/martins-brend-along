

import { useLocation } from "./LocationDataProvider.js";
import { Location } from "./Location.js";

/**
 *  LocationList which renders individual location objects as HTML
 */

export const LocationList = () => {

    // Get a reference to the `<ul class="place-list">` element
    const contentElement = document.querySelector(".place-list"); // targets a certain tag in HTML
    const places = useLocation()

    let placeHTMLRepresentation = "";
    for (const place of places) {
        placeHTMLRepresentation += Location(place);
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        ${placeHTMLRepresentation}
    `
}