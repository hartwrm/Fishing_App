console.log("ground control to major tom?");
console.log($);

// zipcode is going to be user input
let zipCode = '';

$('#submit').on('click', (event) => {
  event.preventDefault()
  zipCode = $('#input').val()
  console.log(zipCode);
  $('.scroll').css('display', 'block')
  goFish()
  $('form').appendTo('body')
})

//URL variables for API
let baseURL = 'https://api.openweathermap.org/data/2.5/forecast?zip='
let apiKey = '&appid=7538ada83bef78836cd80e44d909aa83'
let queryURL = baseURL + zipCode + apiKey + '&units=imperial'
console.log(queryURL);



//return pertinent weather data for fishing
//tried to write this in a DRYer function but ended up just beating my head against the wall
const goFish = () => {
  $.ajax({
    url: baseURL + zipCode + apiKey + '&units=imperial'
  }).then((weather) => {
    console.log(weather);
    $('#1').html(`
      <img src='http://openweathermap.org/img/w/${weather.list[2].weather[0].icon}.png' alt="Weather Icon">
      <h2>${weather.city.name}</h2>
      <h3>${weather.list[2].dt_txt}</h3>
      <h4>Temp Range: ${weather.list[2].main.temp_min}-${weather.list[2].main.temp_max}°F</h4>
      <p>Status: ${weather.list[2].weather[0].description}</p>
      <p>Humidity: ${weather.list[2].main.humidity}%</p>
      <p>Cloudiness: ${weather.list[2].clouds.all}%</p>
      <p>Wind Speed: ${weather.list[2].wind.speed}mph</p>
      <p>Wind Direction: ${weather.list[2].wind.deg}</p>
      `)
      $('#2').html(`
        <img src='http://openweathermap.org/img/w/${weather.list[10].weather[0].icon}.png' alt="Weather Icon">
        <h2>${weather.city.name}</h2>
        <h3>${weather.list[10].dt_txt}</h3>
        <h4>Temp Range: ${weather.list[10].main.temp_min}-${weather.list[2].main.temp_max}°F</h4>
        <p>Status: ${weather.list[10].weather[0].description}</p>
        <p>Humidity: ${weather.list[10].main.humidity}%</p>
        <p>Cloudiness: ${weather.list[10].clouds.all}%</p>
        <p>Wind Speed: ${weather.list[10].wind.speed}mph</p>
        <p>Wind Direction: ${weather.list[10].wind.deg}</p>
      `)
      $('#3').html(`
        <img src='http://openweathermap.org/img/w/${weather.list[18].weather[0].icon}.png' alt="Weather Icon">
        <h2>${weather.city.name}</h2>
        <h3>${weather.list[18].dt_txt}</h3>
        <h4>Temp Range: ${weather.list[18].main.temp_min}-${weather.list[2].main.temp_max}°F</h4>
        <p>Status: ${weather.list[18].weather[0].description}</p>
        <p>Humidity: ${weather.list[18].main.humidity}%</p>
        <p>Cloudiness: ${weather.list[18].clouds.all}%</p>
        <p>Wind Speed: ${weather.list[18].wind.speed}mph</p>
        <p>Wind Direction: ${weather.list[18].wind.deg}</p>
      `)
      $('#4').html(`
          <img src='http://openweathermap.org/img/w/${weather.list[26].weather[0].icon}.png' alt="Weather Icon">
        <h2>${weather.city.name}</h2>
        <h3>${weather.list[26].dt_txt}</h3>
        <h4>Temp Range: ${weather.list[26].main.temp_min}-${weather.list[2].main.temp_max}°F</h4>
        <p>Status: ${weather.list[26].weather[0].description}</p>
        <p>Humidity: ${weather.list[26].main.humidity}%</p>
        <p>Cloudiness: ${weather.list[26].clouds.all}%</p>
        <p>Wind Speed: ${weather.list[26].wind.speed}mph</p>
        <p>Wind Direction: ${weather.list[26].wind.deg}</p>
      `)
      $('#5').html(`
        <img src='http://openweathermap.org/img/w/${weather.list[34].weather[0].icon}.png' alt="Weather Icon">
        <h2>${weather.city.name}</h2>
        <h3>${weather.list[34].dt_txt}</h3>
        <h4>Temp Range: ${weather.list[34].main.temp_min}-${weather.list[2].main.temp_max}°F</h4>
        <p>Status: ${weather.list[34].weather[0].description}</p>
        <p>Humidity: ${weather.list[34].main.humidity}%</p>
        <p>Cloudiness: ${weather.list[34].clouds.all}%</p>
        <p>Wind Speed: ${weather.list[34].wind.speed}mph</p>
        <p>Wind Direction: ${weather.list[34].wind.deg}degrees</p>
      `)
  })
}

$(() => {

//carousel variables
let currentIndex = 0
let highestIndex = $('.allDays').children().length-1;
console.log($('.allDays').children().length);

//scroll next
$('#next').on('click', () => {
  $('.allDays').children().eq(currentIndex).css('display', 'none')
  if (currentIndex < highestIndex) {
    currentIndex++
  }else {
    currentIndex = 0
  }
  $('.allDays').children().eq(currentIndex).css('display', 'block')
})

//scroll back
$('#back').on('click', () => {
  $('.allDays').children().eq(currentIndex).css('display', 'none')
  if (currentIndex > 0) {
    currentIndex--
  } else {
    currentIndex = highestIndex
  }
  $('.allDays').children().eq(currentIndex).css('display', 'block')
})


//dont touch
})
