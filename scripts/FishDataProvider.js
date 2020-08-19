const fishCollection = [
    {
        givenName: "Big Blue",
        species: "Male Beta",
        length: "2 inches",
        diet: "Flies",
        harvestLocation: "Beaches of Walmart"    
    },
    {
        givenName: "Big Blue",
        species: "Male Beta",
        length: "2 inches",
        diet: "Flies",
        harvestLocation: "Wally World"    
    },
    {
        givenName: "Big Orange",
        species: "Lil Orange",
        length: "2 inches",
        diet: "Bugs",
        harvestLocation: "A Pool"    
    },
    {
        givenName: "Purple",
        species: "Pretty Purple",
        length: "5 inches",
        diet: "Squid",
        harvestLocation: "Ocean"    
    },
    {
        givenName: "Blorpy",
        species: "Blob Fish",
        length: "2 feet",
        diet: "Sea Urchins",
        harvestLocation: "Deep Dark"    
    },
    {
        givenName: "Life of the Party",
        species: "Crazinus Fishifus",
        length: "4 inches",
        diet: "Algae",
        harvestLocation: "Off of Austraila"    
    },
    {
        givenName: "Buford",
        species: "Dope Fish",
        length: "22 inches",
        diet: "Fish Kibble",
        harvestLocation: "Fish Store"    
    },
    {
        givenName: "Fish Eater",
        species: "Kitty Kitty",
        length: "1 foot",
        diet: "Fish",
        harvestLocation: "Outside the aquarium"    
    },
    {
        givenName: "Nemo",
        species: "Striped Fish",
        length: "0.5 inches",
        diet: "Seaweed",
        harvestLocation: "Not too deep"    
    },
    {
        givenName: "Newest Fish",
        species: "Yello Fish",
        length: "0.6 inches",
        diet: "Coral Reefs",
        harvestLocation: "Coral Reef"    
    },
    {
        givenName: "Franken Fish",
        species: "Homemade Fish",
        length: "0.3 inches",
        diet: "Cheese",
        harvestLocation: "Operating Room"    
    },
    {
        givenName: "Torch",
        species: "Flame Angelfish",
        length: "3 inches",
        diet: "Mealworms",
        harvestLocation: "San Jose, CA"
    },
    {
        givenName: "Rocky",
        species: "Blue Damselfish",
        length: "2 inches",
        diet: "Copepods",
        harvestLocation: "Destin, FL"
    },
    {
        givenName: "Rudy",
        species: "Copperband Butterflyfish",
        length: "5 inches",
        diet: "Mealworms",
        harvestLocation: "Costa Rica"
    },
    {
        givenName: "Simba",
        species: "Lionfish",
        length: "6 inches",
        diet: "Mealworms",
        harvestLocation: "Argentina"
    }
];

// Exports a function that uses slice
// to return a copy of the original array.
// Because we're not mentioning a slice point in the (),
// it will slice the entire array from start to finish.
export const useFish = () => {
    return fishCollection.slice()
}