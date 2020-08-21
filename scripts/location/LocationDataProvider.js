
// Array of location objects 
const placeCollection = [
    {
        name: "Place 1"
    },
    {
        name: "Place 2"
    },
    {
        name: "Place 3"
    },
    {
        name: "Place 4"
    },
    {
        name: "Place 5"
    }
]

export const useLocation = () => {
    return placeCollection.slice() // slice() returns a copy of the array
}