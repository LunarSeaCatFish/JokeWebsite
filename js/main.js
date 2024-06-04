window.onload = function () {
    let randomJokeButton = document.querySelector("#get-random-joke");
    randomJokeButton.onclick = getJoke;
};
function getJoke() {
    let randomJokeUrl = "https://v2.jokeapi.dev/joke/Programming?type=sigle&safe-mode";
    fetch(randomJokeUrl)
        .then((response) => response.json())
        .then((jsonData) => {
        console.log(jsonData);
    });
}
