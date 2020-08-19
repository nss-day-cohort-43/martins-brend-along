import { useLocation } from "./LocationDataProvider.js";
import { Location } from "./Location.js";

export const LocationList = () => {

    const contentElement = document.querySelector(".placesList")

    const locations = useLocation();

    let locationHTML = "";
    for (const location  of locations) {
        locationHTML += Location(location);
    }

    contentElement.innerHTML += `
        ${locationHTML}
    `
};