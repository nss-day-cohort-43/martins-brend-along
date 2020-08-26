/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
    {
        givenName: "Alan",
        species: "coral fish",
        length: "10 inches",
        diet: "algae",
        harvestedFrom: "Pier 2",
        image: "bluefish.jpg"
    },
    {
        givenName: "Dory",
        species: "Royal Blue Tang",
        length: "18 cm",
        diet: "crustaceans",
        harvestLocation: "Marina",
        image: "blue-tang.jpg"
    },
    {
        givenName: "Archy",
        species: "Arc-Eye Hawkfish",
        length: "20 cm",
        diet: "shrimp and other small fishes",
        harvestLocation: "Seaward reefs in the pacific ocean",
        image: "Arc eye hawkfish.jpg"
    },
    {
        givenName: "Pear",
        species: "Bartletts' Anthias",
        length: "9 cm",
        diet: "zooplankton",
        harvestLocation: "Coral reef in the western Pacific ocean",
        image: "anthia-bartlett.jpg"
    },
    {
        givenName: "Axel Rose",
        species: "Axilspot Wrasse",
        length: "20 cm",
        diet: "mollusks",
        harvestLocation: "A clear lagoon",
        image: "axilspot-wrasse.jpg"
    },
    {
        givenName: "Angle",
        species: "Bicolor Angelfish",
        length: "15 cm",
        diet: "coral polyps",
        harvestLocation: "Coral and rubble areas",
        image: "bicolor-angelfish.jpg"
    },
    {
        givenName: "Patricia",
        species: "Bignose Unicornfish",
        length: "55 cm",
        diet: "zooplankton",
        harvestLocation: "Deep lagoon",
        image: "Bignose-Unicornfish.jpg"
    },
];

// This is new code. Add this.
// this uses the slice method to make a new array.
export const useFish = () => {
    return fishCollection.slice()
};