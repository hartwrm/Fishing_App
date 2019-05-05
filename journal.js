console.log('hello world');

let city = JSON.parse(localStorage.getItem('city'))


$(() => {

$('.journalcontainer').prepend(city)

$('form').on('#save', () => {
  localStorage.setItem('tripinfo', JSON.stringify('form'))
})

})
