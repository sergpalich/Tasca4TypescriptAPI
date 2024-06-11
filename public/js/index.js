var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fetchJoke from "./fetch_joke.js";
let currentJoke = fetchJoke();
const reportAcudits = [];
function addVote(score) {
    const newVote = {
        joke: currentJoke,
        date: new Date().toISOString(),
        score: score
    };
    reportAcudits.push(newVote);
    console.log(reportAcudits);
}
const butOne = document.getElementById('1st');
butOne === null || butOne === void 0 ? void 0 : butOne.addEventListener('click', () => { addVote(1); });
const butTwo = document.getElementById('2nd');
butTwo === null || butTwo === void 0 ? void 0 : butTwo.addEventListener('click', () => { addVote(2); });
const butThree = document.getElementById('3rd');
butThree === null || butThree === void 0 ? void 0 : butThree.addEventListener('click', () => { addVote(3); });
console.log(reportAcudits.length);
/* Fetching API de tiempo */
function checkWeather() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('https://api.openweathermap.org/data/2.5/weather?lat=41.34&lon=2.16&appid=16424a88328bc0be2e4af0393d874c1a');
            if (!response.ok) {
                throw new Error('Error fetching weather data');
            }
            const data = yield response.json();
            displayTemperature(data.main.temp);
            displayIcon(data.weather[0].main);
        }
        catch (error) {
            console.error(error);
            displayError();
        }
    });
}
/* Publicando temperatura  */
function displayTemperature(temp) {
    const temperatureElement = document.getElementById('temperature');
    if (temperatureElement) {
        let tiempoEnCelsius = (Math.floor(temp - 273.15));
        temperatureElement.textContent = tiempoEnCelsius + '°C';
    }
}
/* Publicando icono del tiempo */
function displayIcon(main) {
    const iconElement = document.getElementById('icon');
    var img = document.createElement('img');
    if (iconElement) {
        /* iconElement.textContent = main;
        console.log(main) */
        switch (main) {
            case 'Thunderstorm':
                img.src = 'img/thunderstorm.png';
                img.alt = 'Thunderstorm';
                break;
            case 'Shower rain':
                img.src = 'img/showerrain.png';
                img.alt = 'Shower rain';
                break;
            case 'Rain':
                img.src = 'img/rain.png';
                img.alt = 'Rain';
                break;
            case 'Snow':
                img.src = 'img/snow.png';
                img.alt = 'Show';
                break;
            case 'Clear sky':
                img.src = 'img/sun.png';
                img.alt = 'Clear sky';
                break;
            case 'Few clouds':
                img.src = 'img/fewclouds.png';
                img.alt = 'Few clouds';
                break;
            case 'Scattered clouds':
                img.src = 'img/scatteredclouds.png';
                img.alt = 'Scattered clouds';
                break;
            case 'Broken clouds':
                img.src = 'img/brokenclouds.png';
                img.alt = 'Broken clouds';
                break;
            case 'Clouds':
                img.src = '/img/rain.png';
                img.alt = 'Clouds';
                break;
            default:
                img.src = '';
                img.alt = '';
        }
        iconElement.appendChild(img);
    }
}
function displayError() {
    const temperatureElement = document.getElementById('temperature');
    if (temperatureElement) {
        temperatureElement.textContent = 'Failed to load temperature data.';
    }
}
checkWeather();
