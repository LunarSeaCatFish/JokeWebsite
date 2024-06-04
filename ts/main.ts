window.onload = function() {
    let randomJokeButton = document.querySelector("#get-random-joke") as HTMLButtonElement;
    randomJokeButton.onclick = getJoke;
}

function getJoke() {
    // Only retrieve safe programming jokes
    let randomJokeUrl = "https://v2.jokeapi.dev/joke/Programming?type=sigle&safe-mode";

    fetch(randomJokeUrl)
        .then((response) => response.json()) // Get the response object and return the json data
        .then(
            (jsonData) => {
                console.log(jsonData);
            }
        )
}