const app = document.getElementById('app');
const date = document.getElementById('date');
const city = document.getElementById('city');
const tempImg = document.getElementById('tempImg');
const description = document.getElementById('description');
const temp = document.getElementById('temp');
const tempMax = document.getElementById('tempMax');
const tempMin = document.getElementById('tempMin');

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let dateObj = new Date();
let month = months[dateObj.getUTCMonth()];
let day = dateObj.getUTCDate();
let year = dateObj.getUTCFullYear();
date.innerHTML = `${month} ${day} ${year}`;

const getWeather = async ()=>{
    try{ 
        const cityName = document.getElementById('searchBarInput').value;
        const weatherDataFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${"PUT YOUR API KEY HERE"}&units=metric`, {
            headers: {
                Accept: "application/json"
              }
        });
        const weatherData = await weatherDataFetch.json();
        console.log(weatherData);
        city.innerHTML = `${weatherData.name}`;
        description.innerHTML = `${weatherData.weather[0].main}`;
        tempImg.innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png" />`;
        temp.innerHTML = `<h2>${Math.round(weatherData.main.temp)}°C</h2>`;
        tempMax.innerHTML = `${weatherData.main.temp_max}°C`;
        tempMin.innerHTML = `${weatherData.main.temp_min}°C`;

    }
    catch(error){
        console.log(error);
    }
}
