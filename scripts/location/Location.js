

/**
 *  location which renders individual location objects as HTML
 */
export const Location = (placeObj) => {
    // backticks surrounding something makes it a template string (can insert items into a string)
    return `
       <li>${placeObj.name}</li>
    `
}