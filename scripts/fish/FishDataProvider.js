const fishCollection = [
    {
        givenName: "Big Blue",
        species: "Male Beta",
        length: 2,
        diet: "Flies",
        harvestLocation: "Beaches of Walmart",
        image: "cat.jpg"
    },
    {
        givenName: "Big Blue",
        species: "Male Beta",
        length: 2,
        diet: "Flies",
        harvestLocation: "Wally World",
        image: "cat.jpg"    
    },
    {
        givenName: "Big Orange",
        species: "Lil Orange",
        length: 2,
        diet: "Bugs",
        harvestLocation: "A Pool",
        image: "cat.jpg"
    },
    {
        givenName: "Purple",
        species: "Pretty Purple",
        length: 5,
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
        length: 4,
        diet: "Algae",
        harvestLocation: "Off of Austraila",
        image: "cat.jpg"    
    },
    {
        givenName: "Buford",
        species: "Dope Fish",
        length: 2,
        diet: "Fish Kibble",
        harvestLocation: "Fish Store",
        image: "cat.jpg"    
    },
    {
        givenName: "Fish Eater",
        species: "Kitty Kitty",
        length: 1,
        diet: "Fish",
        harvestLocation: "Outside the aquarium",
        image: "cat.jpg"    
    },
    {
        givenName: "Nemo",
        species: "Striped Fish",
        length: 5,
        diet: "Seaweed",
        harvestLocation: "Not too deep",
        image: "cat.jpg"    
    },
    {
        givenName: "Newest Fish",
        species: "Yello Fish",
        length: 6,
        diet: "Coral Reefs",
        harvestLocation: "Coral Reef",
        image: "cat.jpg"    
    },
    {
        givenName: "Franken Fish",
        species: "Homemade Fish",
        length: 3,
        diet: "Cheese",
        harvestLocation: "Operating Room",
        image: "cat.jpg"    
    },
    {
        givenName: "Torch",
        species: "Flame Angelfish",
        length: 3,
        diet: "Mealworms",
        harvestLocation: "San Jose, CA",
        image: "cat.jpg"
    },
    {
        givenName: "Rocky",
        species: "Blue Damselfish",
        length: 2,
        diet: "Copepods",
        harvestLocation: "Destin, FL",
        image: "cat.jpg"
    },
    {
        givenName: "Rudy",
        species: "Copperband Butterflyfish",
        length: 5,
        diet: "Mealworms",
        harvestLocation: "Costa Rica",
        image: "cat.jpg"
    },
    {
        givenName: "Simba",
        species: "Lionfish",
        length: 15,
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

//Martin's Mayan Adventure
export const sortMostHolyFish = () => {
    //3, 6, 9
    const arrayMostHolyFish = [];

    //If length is divible by three, add to array
    for (const fish of fishCollection) {
        if (fish.length % 3 === 0) {
            arrayMostHolyFish.push(fish);
        }

    }
    return sortMostHolyFish;
};

export const sortSoldierFish = () => {
    //5, 10, X-15 (left off because divisble by 3), 20

    const arraySoldierFish = [];

    for (const fish of fishCollection) {
        //divisible by 5 but don't include those also divisible by 3
        if (fish.length % 5 === 0 && fish.length % 3 !== 0) {
            arraySoldierFish.push(fish);
        }
    }

};