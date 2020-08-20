/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
    {
		givenName: "Bart",
		size: "5 inches",
		diet: "crustaceans",
		species: "Clownfish",
		harvestLocation: "Petco",
		image: "blobfish-2.jpg"
	},
	{
		givenName: "Big Mac",
		size: "6 feet",
		diet: "jellyfish",
		species: "Giant sunfish",
		harvestLocation: "Sam's Club Reef",
		image: "bluefish.jpg"
	},
	{
		givenName: "Squigle",
		size: "2 feet",
		diet: "smaller fish",
		species: "Moray Eel",
		harvestLocation: "Ole Dan's boat wreck",
		image: "bluefish.jpg"
	},
	{
		givenName: "Hammy",
		size: "4 feet",
		diet: "just about everything",
		species: "Groupers",
		harvestLocation: "Jimmy's big boi fishin' spot",
		image: "bluefish.jpg"
	},
	{
		givenName: "Tiny",
		size: "1 inch",
		diet: "plankton",
		species: "Blue Chromis",
		harvestLocation: "Young Dan's boat wreck",
		image: "bluefish.jpg"
	},
	{
        givenName: "Nemo",
        species: "Clownfish",
        length: "1.5 inches",
        diet: "Copepods",
		harvestLocation: "Orlando, FL",
		image: "bluefish.jpg"
    },
    {
        givenName: "Torch",
        species: "Flame Angelfish",
        length: "3 inches",
        diet: "Mealworms",
		harvestLocation: "San Jose, CA",
		image: "bluefish.jpg"
    },
    {
        givenName: "Rocky",
        species: "Blue Damselfish",
        length: "2 inches",
        diet: "Copepods",
		harvestLocation: "Destin, FL",
		image: "bluefish.jpg"
    },
    {
        givenName: "Rudy",
        species: "Copperband Butterflyfish",
        length: "5 inches",
        diet: "Mealworms",
		harvestLocation: "Costa Rica",
		image: "bluefish.jpg"
    },
    {
        givenName: "Simba",
        species: "Lionfish",
        length: "6 inches",
        diet: "Mealworms",
		harvestLocation: "Argentina",
		image: "bluefish.jpg"
    },
    {
        givenName: "Mr. Freeze",
        species: "Blue Tang",
        length: "6 inches",
        diet: "Mealworms",
		harvestLocation: "Costa Rica",
		image: "bluefish.jpg"
    },
    {
        givenName: "Frodo",
        species: "Yellow Tang",
        length: "4 inches",
        diet: "Mealworms",
		harvestLocation: "Honolulu, HI",
		image: "bluefish.jpg"
    }
]

// This is new code. Add this.
// export a function that will return a copy of the original array
// this uses the slice method to make the copy
// slice reference https://www.w3schools.com/jsref/jsref_slice_array.asp
export const useFish = () => {
    return fishCollection.slice();
}