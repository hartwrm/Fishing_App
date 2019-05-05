console.log('hello world');

let trip = localStorage.getItem('trip')

console.log(localStorage.getItem('trip'));

$(() => {

  $('.journalcontainer').prepend(trip);

})
