console.log('hello world');

let city = JSON.parse(localStorage.getItem('city'))


$(() => {

$('.journalcontainer').prepend(city)



})
