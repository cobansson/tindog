import { dogs } from "./dogs.js";
import { DogProfile } from "./constructor.js";

export let dogsArray = [];
const transparentImage = "images/transparent.png";

function getNewDogsArray() {
    dogsArray.unshift(dogs.splice(Math.floor(Math.random() * dogs.length), 1)[0]);
    return dogsArray[0];
}

export function setNewDogsHtml() {
    return new DogProfile(getNewDogsArray()).dogProfileHtml(transparentImage);
}