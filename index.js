import { dogsArray, setNewDogsHtml } from "./utils.js";
import { DogProfile } from "./constructor.js";
import { dogs } from "./dogs.js";

const likeBtn = document.getElementById("like-btn");
const dislikeBtn = document.getElementById("dislike-btn");
const characterHtml = document.getElementById("character-main");
const main = document.getElementById("main");
const finalText = document.getElementById("final-text");

const likeImage = "images/badge-like.png";
const dislikeImage = "images/badge-nope.png";

likeBtn.addEventListener("click", () => action(likeImage));
dislikeBtn.addEventListener("click", () => action(dislikeImage));

function action(img) {
    characterHtml.innerHTML = new DogProfile(dogsArray[0]).dogProfileHtml(img);
    document.getElementById("stamp-img").style.display = "block";
    likeBtn.style['pointer-events'] = 'none';
    dislikeBtn.style['pointer-events'] = 'none';
    setTimeout (() => {
        if (dogs.length > 0) {
            likeBtn.style['pointer-events'] = 'auto';
            dislikeBtn.style['pointer-events'] = 'auto';
            render()
        } else {
            main.style.display = "none";
            finalText.style.display = "block";
        }
    }, 1500)
}

function render() {
    characterHtml.innerHTML = setNewDogsHtml();
    document.getElementById("stamp-img").style.display = "none";
}

render();