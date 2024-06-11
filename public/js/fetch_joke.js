const place = document.getElementById('jokePlace');
const parag = document.createElement('p');
var newJoke = '';
export default function fetchJoke() {
    const urlJoke = 'https://icanhazdadjoke.com/';
    const urlChuck = 'https://api.chucknorris.io/jokes/random';
    const dados = Math.floor(Math.random() * 2);
    if (dados === 0) {
        fetch(urlJoke, {
            headers: {
                accept: 'application/json',
                'User-agent': 'learning app'
            }
        })
            .then(res => res.json())
            .then((res) => (newJoke = `${res.joke}`,
            parag.innerText = newJoke,
            place.appendChild(parag)));
        return newJoke;
    }
    else {
        fetch(urlChuck, {
            headers: {
                accept: 'application/json',
                'User-agent': 'learning app'
            }
        })
            .then(res => res.json())
            .then((data) => (newJoke = `${data.value}`), parag.innerText = newJoke, place.appendChild(parag));
        ;
    }
}
let nextJokeButton = document.getElementById('btn');
nextJokeButton === null || nextJokeButton === void 0 ? void 0 : nextJokeButton.addEventListener('click', () => {
    place.removeChild(parag);
    fetchJoke();
});
