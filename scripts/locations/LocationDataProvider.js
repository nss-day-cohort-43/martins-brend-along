const locationCollection = [
    {
        location: "Ocean"
    },
    {
        location: "River"
    },
    {
        location: "Lake"
    },
    {
        location: "Pond"
    },
    {
        location: "Stream"
    },
    {
        location: "Craigslist"
    },
    {
        location: "Ebay"
    },
    {
        location: "Always check Amazon first!"
    }
];

export const useLocation = () => {
    return locationCollection.slice();
}