export const Fish = (fishObj) => {
    return `  
    <div class="fish card">
    <div class="fish__image"> 
        <img src="images/${fishObj.image}" alt="${fishObj.species}">
        </div>

            <ul>
                <li> class="fish__name">${fishObj.givenName}</li>
                <li> class="fish__species">${fishObj.species}</li>
                <li> class="fish__length">${fishObj.length}</li>
                <li> class="fish__location">${fishObj.diet}</li>
                <li> class="fish__diet">${fishObj.harvestLocation}</li>
            </ul>
        </div>
    `
};