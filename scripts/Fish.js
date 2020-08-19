export const Fish = (fishObj) => {
    return `
        <div class="fishList-card">
            <div class="card-image">
                <img class="fish-image" src="/images/${fishObj.image}" alt="Probably a cat.">
            </div>
            <ul>
                <li>Given Name: ${fishObj.givenName}</li>
                <li>Species: ${fishObj.species}</li>
                <li>Length: ${fishObj.length}</li>
                <li>Diet: ${fishObj.diet}</li>
                <li>Harvest Location: ${fishObj.harvestLocation}</li>
            </ul>
        </div>
    `
}