

/**
 *  Fish which renders individual fish objects as HTML
 */
export const Fish = (fishObj) => {
    // backticks surrounding something makes it a template string (can insert items into a string)
    return `
        <div class="fishList-card">
            <div class="card-image">
                <img class="fish-image" src="images/${fishObj.image}" alt="${fishObj.species}">
            </div>
            <ul>
                <li>Given Name: ${fishObj.name}</li>
                <li>Species: ${fishObj.species}</li>
                <li>Length: ${fishObj.length}</li>
                <li>Diet: ${fishObj.diet}</li>
                <li>Harvest Location: ${fishObj.location}</li>
            </ul>
        </div>
    `
}