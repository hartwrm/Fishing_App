console.log("are you there?");
console.log($);

//zipcode is going to be user input
let zipCode = '18201'

//URL variables for API
let baseURL = 'https://api.openweathermap.org/data/2.5/forecast?zip='
let apiKey = '&appid=7538ada83bef78836cd80e44d909aa83'
let queryURL = baseURL + zipCode + apiKey + '&units=imperial'
console.log(queryURL);


const forecast = () => {
  for (let i = 1; i <= 5; i++) {
    const $days = $('<div>').attr('id', i).appendTo('.days')
  }
}

//return pertinent weather data for fishing
//tried to write this in a DRYer function but ended up just beating my head against the wall
const goFish = () => {
  $.ajax({
    url: queryURL
  }).then((weather) => {
    console.log(weather);
    $('#1').html(`
      <h2>${weather.city.name}</h2>
      <h3>${weather.list[1].dt_txt}</h3>
      <img src='http://openweathermap.org/img/w/${weather.list[2].weather[0].icon}.png' alt="Weather Icon">
      <h4>Temp Range: ${weather.list[1].main.temp_min}-${weather.list[2].main.temp_max}°F</h4>
      <p>Humidity: ${weather.list[1].main.humidity}%</p>
      <p>${weather.list[1].weather[0].description}</p>
      <p>Cloudiness: ${weather.list[1].clouds.all}%</p>
      <p>Wind Speed: ${weather.list[1].wind.speed}mph</p>
      <p>Wind Direction: ${weather.list[1].wind.deg}</p>
      `)
      $('#2').html(`
        <h2>${weather.city.name}</h2>
        <h3>${weather.list[9].dt_txt}</h3>
        <img src='http://openweathermap.org/img/w/${weather.list[9].weather[0].icon}.png' alt="Weather Icon">
        <h4>Temp Range: ${weather.list[9].main.temp_min}-${weather.list[2].main.temp_max}°F</h4>
        <p>Humidity: ${weather.list[9].main.humidity}%</p>
        <p>${weather.list[9].weather[0].description}</p>
        <p>Cloudiness: ${weather.list[9].clouds.all}%</p>
        <p>Wind Speed: ${weather.list[9].wind.speed}mph</p>
        <p>Wind Direction: ${weather.list[9].wind.deg}</p>
      `)
      $('#3').html(`
        <h2>${weather.city.name}</h2>
        <h3>${weather.list[17].dt_txt}</h3>
        <img src='http://openweathermap.org/img/w/${weather.list[17].weather[0].icon}.png' alt="Weather Icon">
        <h4>Temp Range: ${weather.list[17].main.temp_min}-${weather.list[2].main.temp_max}°F</h4>
        <p>Humidity: ${weather.list[17].main.humidity}%</p>
        <p>${weather.list[17].weather[0].description}</p>
        <p>Cloudiness: ${weather.list[17].clouds.all}%</p>
        <p>Wind Speed: ${weather.list[17].wind.speed}mph</p>
        <p>Wind Direction: ${weather.list[17].wind.deg}</p>
      `)
      $('#4').html(`
        <h2>${weather.city.name}</h2>
        <h3>${weather.list[25].dt_txt}</h3>
        <img src='http://openweathermap.org/img/w/${weather.list[25].weather[0].icon}.png' alt="Weather Icon">
        <h4>Temp Range: ${weather.list[25].main.temp_min}-${weather.list[2].main.temp_max}°F</h4>
        <p>Humidity: ${weather.list[25].main.humidity}%</p>
        <p>${weather.list[25].weather[0].description}</p>
        <p>Cloudiness: ${weather.list[25].clouds.all}%</p>
        <p>Wind Speed: ${weather.list[25].wind.speed}mph</p>
        <p>Wind Direction: ${weather.list[25].wind.deg}</p>
      `)
      $('#5').html(`
        <h2>${weather.city.name}</h2>
        <h3>${weather.list[33].dt_txt}</h3>
        <img src='http://openweathermap.org/img/w/${weather.list[2].weather[0].icon}.png' alt="Weather Icon">
        <h4>Temp Range: ${weather.list[33].main.temp_min}-${weather.list[2].main.temp_max}°F</h4>
        <p>Humidity: ${weather.list[33].main.humidity}%</p>
        <p>${weather.list[33].weather[0].description}</p>
        <p>Cloudiness: ${weather.list[33].clouds.all}%</p>
        <p>Wind Speed: ${weather.list[33].wind.speed}mph</p>
        <p>Wind Direction: ${weather.list[33].wind.deg}</p>
      `)
  })
}

$(() => {
forecast();
goFish();

})
