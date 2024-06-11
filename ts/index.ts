import fetchChuck from "./fetch_joke.js";
import fetchJoke  from "./fetch_joke.js";

let currentJoke = fetchJoke();



interface votedJoke {
    joke: string;
    score: number;
    date: Date;
}


const reportAcudits: { joke: string; date: string; score: number | null; }[] = [];

function addVote(score: number): void {
   
    const newVote = {
        joke: currentJoke,
        date: new Date().toISOString(),
        score: score
        };
   
    
        reportAcudits.push(newVote);
        console.log(reportAcudits)
        

}



const butOne: HTMLElement | null = document.getElementById('1st')
butOne?.addEventListener('click', ()=> {addVote(1)})

const butTwo: HTMLElement | null = document.getElementById('2nd')
butTwo?.addEventListener('click', ()=> {addVote(2)})

const butThree: HTMLElement | null = document.getElementById('3rd')
butThree?.addEventListener('click', ()=> {addVote(3)})


console.log(reportAcudits.length)

interface WeatherResponse {
    main: {
        temp: number;
    };

    weather: {
        '0': {
            main: string;
        }
    }

}

/* Fetching API de tiempo */

async function checkWeather(): Promise<void> {
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=41.34&lon=2.16&appid=16424a88328bc0be2e4af0393d874c1a');
        if (!response.ok) {
            throw new Error('Error fetching weather data');
        }
        const data: WeatherResponse = await response.json();
        displayTemperature(data.main.temp);
        displayIcon(data.weather[0].main);
        
    } catch (error) {
        console.error(error);
        displayError();
    }
}

/* Publicando temperatura  */

function displayTemperature(temp: number): void {
    const temperatureElement: HTMLElement | null = document.getElementById('temperature');
    
    if (temperatureElement) {
        let tiempoEnCelsius = (Math.floor(temp-273.15))
        temperatureElement.textContent =  tiempoEnCelsius + '°C';
       
    }

}

/* Publicando icono del tiempo */

function displayIcon (main: string): void {
    const iconElement: HTMLElement | null = document.getElementById('icon') as HTMLImageElement;
    var img = document.createElement('img')
    if (iconElement) {
        /* iconElement.textContent = main;
        console.log(main) */
    

    switch (main) {
        case 'Thunderstorm':
          img.src='img/thunderstorm.png'
          img.alt='Thunderstorm'
         
          break;
        case 'Shower rain':
            img.src='img/showerrain.png';
            img.alt='Shower rain'
          
          break;
        case 'Rain':
            img.src='img/rain.png'
            img.alt='Rain'
          
          break;
        case 'Snow':
            img.src='img/snow.png'
            img.alt='Show'
           
          break;                        
        case 'Clear sky':
            img.src='img/sun.png'
            img.alt='Clear sky'
           
          break;
        case 'Few clouds':
            img.src='img/fewclouds.png'
            img.alt='Few clouds'
            
            break;  
        case 'Scattered clouds':
            img.src='img/scatteredclouds.png'
            img.alt='Scattered clouds'
           
            break;  
        case 'Broken clouds':
            img.src='img/brokenclouds.png'
            img.alt='Broken clouds'
               
            break;  
        
        case 'Clouds':
                img.src='/img/rain.png'
                img.alt='Clouds'
                   
            break;  
        default:
            img.src=''
            img.alt=''
          
      }
      iconElement.appendChild(img)
    }
    
    }
    

function displayError(): void {
    const temperatureElement = document.getElementById('temperature');
    if (temperatureElement) {
        temperatureElement.textContent = 'Failed to load temperature data.';
    }
}

checkWeather();

