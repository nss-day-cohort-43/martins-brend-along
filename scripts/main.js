// It's a good idea to have a console.log
// message to ensure you loaded the main.js correctly.
console.log("main.js loaded");

// Imports the function name you listed from the export command
// and the location that function is at.
import { FishList } from './fish/FishList.js';
import { TipList } from './tips/TipList.js';

// Assigns the function (which is returning)
// the sliced array of objects, so we can use it.
// const allTheFish = useFish()

// For of loop to go through the array of objects
// You declare a variable, fish, to go through an array,
// then what you want to happen as it goes through each item.
// Currently, it console.logs each item in the array.
// We moved the for loop over to FishList.js
// for (const fish of allTheFish) {
//     console.log("THIS ITEM IS:", fish)
// }

FishList();
TipList();