/**
 *  Fish which renders individual fish objects as HTML
 */

// <div><img  class="fish__image image--card" src="${fish.image}" /></div>
export const Fish = (fish) => {
	return `
        <section class="fishList-card">
        <div><img  class="fish-image" src="${fish.image}" /></div>
            <div class="fish__name">${fish.givenName}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.size}</div>
            <div class="fish__location">${fish.harvestLocation}</div>
            <div class="fish__diet">${fish.diet}</div>
        </section>
    `;
};
