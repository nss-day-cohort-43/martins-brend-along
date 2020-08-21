
/* 
    The big question is, should each of these functions take in
    the entire fish collection and isolate the fish that meet 
    the functions' requirements? 

    If yes, then each function will take in a variable containing 
    value returned by 'useFish()' from FishDataProvider.js. This 
    would allow each function to be invoked independently of the 
    others. 

    If no, all three functions should be called back to back 
    whenever they need to be used. That way the entire collection 
    can be used only once as input and the functions will filter
    the collection until all fish are categorized.  
*/

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
    const soldiers = [];
    for (const fish of allFish) {
        if (fish.length % 5 === 0){
            soldiers.push(fish);
        }
    }
    return soldiers;
}

export const nonHolyFish = (allFish) => {
    // Any fish not a multiple of 3 or 5
    const regularFish = [];
    for (const fish of allFish) {
        if ((fish.length % 3 != 0) && (fish.length % 5 != 0)){
            regularFish.push(fish);
        }
    }
    return regularFish;
}
