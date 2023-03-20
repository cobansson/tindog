export class DogProfile {
    constructor(data) {
        Object.assign(this, data);

        this.dogProfileHtml = (image) => {
            const { name, avatar, age, bio } = this;

            return `
            <div class="character-section">
                    <img class="character-img" src="${avatar}">
                    <h1 class="character-name-and-age">${name}, ${age}</h1>
                    <p class="character-message">${bio}</p>
                    <img id="stamp-img" class="like-and-dislike-stamp" src="${image}">
            </div>
            `
        }
    }
}