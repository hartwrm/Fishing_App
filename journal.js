console.log('hello world');

let city = JSON.parse(localStorage.getItem('city'))
let date = JSON.parse(localStorage.getItem('date'))

console.log(JSON.parse(localStorage.getItem('date')));

$(() => {
  $('.journalcontainer').prepend(date)
  $('.journalcontainer').prepend(city);

})
