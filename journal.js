console.log('hello world');

let trip = JSON.parse(localStorage.getItem('trip'))

console.log(JSON.parse(localStorage.getItem('trip')));

$(() => {

  $('.journalcontainer').prepend(trip);

})
