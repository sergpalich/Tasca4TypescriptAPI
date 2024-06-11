import {jokeDad, jokeChuck } from '../ts/Interface/interface'




const place = <Document>document.getElementById('jokePlace');
const parag = document.createElement('p')
var newJoke: string = ''



export default function fetchJoke (): void {
    const urlJoke:string = 'https://icanhazdadjoke.com/'
    const urlChuck: string = 'https://api.chucknorris.io/jokes/random'
    
    const dados = Math.floor(Math.random() *2);

    if (dados === 0) {
      
    fetch(urlJoke,{
        headers:{
          accept: 'application/json',
          'User-agent': 'learning app'
        }
      })
        .then(res => res.json())
        .then((res: jokeDad) => (
            newJoke= `${res.joke}`,
            
            parag.innerText = newJoke,
            place.appendChild(parag)
            
            
        ));
        return newJoke
      } else {
             
          fetch (urlChuck, {
              headers:{
                accept: 'application/json',
                'User-agent': 'learning app'
              }
            })
              .then(res => res.json())
              .then((data: jokeChuck) => (
                  newJoke = `${data.value}`           
                  parag.innerText = newJoke,
                  place.appendChild(parag)
      
              ));
             
              
      }



      }
}



let nextJokeButton = document.getElementById('btn')
nextJokeButton?.addEventListener('click', () => {
    place.removeChild(parag)
    fetchJoke()
}) 

