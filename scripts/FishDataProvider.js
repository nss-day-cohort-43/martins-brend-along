const fishCollection = [
    {
        givenName: "Big Blue",
        species: "Male Beta",
        length: "2 inches",
        diet: "Flies",
        harvestLocation: "Beaches of Walmart",
        image: "cat.jpg"
    },
    {
        givenName: "Big Blue",
        species: "Male Beta",
        length: "2 inches",
        diet: "Flies",
        harvestLocation: "Wally World",
        image: "cat.jpg"    
    },
    {
        givenName: "Big Orange",
        species: "Lil Orange",
        length: "2 inches",
        diet: "Bugs",
        harvestLocation: "A Pool",
        image: "cat.jpg"
    },
    {
        givenName: "Purple",
        species: "Pretty Purple",
        length: "5 inches",
        diet: "Squid",
        harvestLocation: "Ocean",
        image: "cat.jpg"    
    },
    {
        givenName: "Blorpy",
        species: "Blob Fish",
        length: "2 feet",
        diet: "Sea Urchins",
        harvestLocation: "Deep Dark",
        image: "cat.jpg"    
    },
    {
        givenName: "Life of the Party",
        species: "Crazinus Fishifus",
        length: "4 inches",
        diet: "Algae",
        harvestLocation: "Off of Austraila",
        image: "cat.jpg"    
    },
    {
        givenName: "Buford",
        species: "Dope Fish",
        length: "22 inches",
        diet: "Fish Kibble",
        harvestLocation: "Fish Store",
        image: "cat.jpg"    
    },
    {
        givenName: "Fish Eater",
        species: "Kitty Kitty",
        length: "1 foot",
        diet: "Fish",
        harvestLocation: "Outside the aquarium",
        image: "cat.jpg"    
    },
    {
        givenName: "Nemo",
        species: "Striped Fish",
        length: "0.5 inches",
        diet: "Seaweed",
        harvestLocation: "Not too deep",
        image: "cat.jpg"    
    },
    {
        givenName: "Newest Fish",
        species: "Yello Fish",
        length: "0.6 inches",
        diet: "Coral Reefs",
        harvestLocation: "Coral Reef",
        image: "cat.jpg"    
    },
    {
        givenName: "Franken Fish",
        species: "Homemade Fish",
        length: "0.3 inches",
        diet: "Cheese",
        harvestLocation: "Operating Room",
        image: "cat.jpg"    
    },
    {
        givenName: "Torch",
        species: "Flame Angelfish",
        length: "3 inches",
        diet: "Mealworms",
        harvestLocation: "San Jose, CA",
        image: "cat.jpg"
    },
    {
        givenName: "Rocky",
        species: "Blue Damselfish",
        length: "2 inches",
        diet: "Copepods",
        harvestLocation: "Destin, FL",
        image: "cat.jpg"
    },
    {
        givenName: "Rudy",
        species: "Copperband Butterflyfish",
        length: "5 inches",
        diet: "Mealworms",
        harvestLocation: "Costa Rica",
        image: "cat.jpg"
    },
    {
        givenName: "Simba",
        species: "Lionfish",
        length: "6 inches",
        diet: "Mealworms",
        harvestLocation: "Argentina",
        image: "cat.jpg"
    }
];

// Exports a function that uses slice
// to return a copy of the original array.
// Because we're not mentioning a slice point in the (),
// it will slice the entire array from start to finish.
export const useFish = () => {
    return fishCollection.slice()
}