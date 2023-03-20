import { dogs } from "./dogs.js";

export let dogsArray = [];

export function getNewDogsObject() {
    dogsArray.unshift(dogs.splice(Math.floor(Math.random() * dogs.length), 1)[0]);
    return dogsArray[0];
}