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
      <h3>${weather.list[2].dt_txt}</h3>
      <h4>Temp Range: ${weather.list[2].main.temp_min}-${weather.list[2].main.temp_max}°F</h4>
      <p>Humidity: ${weather.list[2].main.humidity}%</p>
      <p>${weather.list[2].weather[0].description}</p>
      <p>Cloudiness: ${weather.list[2].clouds.all}%</p>
      <p>Wind Speed: ${weather.list[2].wind.speed}mph</p>
      <p>Wind Direction: ${weather.list[2].wind.deg}</p>
      `)
      $('#2').html(`
        <h2>${weather.city.name}</h2>
        <h3>${weather.list[8].dt_txt}</h3>
        <h4>Temp Range: ${weather.list[8].main.temp_min}-${weather.list[2].main.temp_max}°F</h4>
        <p>Humidity: ${weather.list[8].main.humidity}%</p>
        <p>${weather.list[8].weather[0].description}</p>
        <p>Cloudiness: ${weather.list[8].clouds.all}%</p>
        <p>Wind Speed: ${weather.list[8].wind.speed}mph</p>
        <p>Wind Direction: ${weather.list[8].wind.deg}</p>
      `)
  })
}

$(() => {
forecast();
goFish();

})
