
// object representing a fish 
/*
const fish_obj = {
    image: "",
    name: "",
    species: "",
    length: "",
    diet: "",
    location: ""

}*/

// Array of fish objects 
const fishCollection = [
    {
        image: "yellowbluefish.jpeg",
        name: "Yello_blue",
        species: "Yellow and blue",
        length: 5,
        diet: "Fish food",
        location: "The ocean"
    },
    {
        image: "bluefish.jpg",
        name: "Big Blue",
        species: "Male beta",
        length: 2,
        diet: "Flies",
        location: "Beaches of Walmart"
    },
    {
        image: "orangefish.jpeg",
        name: "Orangilo",
        species: "Vibrant",
        length: 10,
        diet: "Fish food",
        location: "Another ocean"
    },
    {
        image: "pinkfish.jpeg",
        name: "Pinkie",
        species: "Tank fish",
        length: 4.5,
        diet: "Fish food",
        location: "Another ocean"
    },
    {
        image: "lionfish.jpg",
        name: "Leo",
        species: "Lionfish",
        length: 15,
        diet: "Smaller fish",
        location: "Caribbean"
    },
    {
        image: "sargassum-triggerfish.jpg",
        name: "Long Blue",
        species: "Triggerfish",
        length: 10,
        diet: "Smaller fish",
        location: "Western Atlantic"
    }
]

/*
const addNewFish = () => {
    let newFish = new fish_obj;
    newFish.name = prompt("Name of the fish: ");
    newFish.species = prompt("Fish species: ");
    newFish.length = prompt("Length of fish (inches): ");
    newFish.diet = prompt("Diet: ");
    newFish.location = prompt("Harvest location: ");

    fishCollection.push(newFish);
}*/

/*
export const fishObj = {
    image: "",
    name: "",
    species: "",
    length: 0,
    diet: "",
    location: ""
}*/
export const useFish = () => {
    return fishCollection.slice() // slice() returns a copy of the array
}

export const mostHolyFish = (allFish) => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = [];
    for (const fish of allFish) {
        if (fish.length % 3 === 0){
            holyFish.push(fish);
        }
    }
    return holyFish;
}

export const soldierFish = (allFish) => {
    // 5, 10, 15, 20, 25, etc... fish
    // exclude all fish divisible by 3
    const soldiers = [];
    for (const fish of allFish) {
        if ((fish.length % 5 === 0) && (fish.length % 3 !== 0)){
            soldiers.push(fish);
        }
    }
    return soldiers;
}

export const unHolyFish = (allFish) => {
    // Any fish not a multiple of 3 or 5
    const regularFish = [];
    for (const fish of allFish) {
        if ((fish.length % 3 !== 0) && (fish.length % 5 !== 0)){
            regularFish.push(fish);
        }
    }
    return regularFish;
}