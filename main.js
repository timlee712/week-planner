
var entry = document.querySelector('.add-entry-button');

function addEntry() {
  var modal = document.getElementById('modal-contents');
  modal.classList.remove('hidden');
}

entry.addEventListener('click', addEntry);

var submit = document.getElementById('submit');

function submitEntry() {
  var modal = document.getElementById('modal-contents');
  modal.classList.add('hidden');
}

submit.addEventListener('click', submitEntry);

var button = document.querySelectorAll('.button');
var buttonArray = [...button];

buttonArray.forEach(placeHolder);

function placeHolder(event) {
  event.addEventListener('click', daySwap);
}

function daySwap(event) {
  var day = event.target.getAttribute('id');
  var monday = document.querySelector('#monday-s');
  var tuesday = document.querySelector('#tuesday-s');
  var wednesday = document.querySelector('#wednesday-s');
  var thursday = document.querySelector('#thursday-s');
  var friday = document.querySelector('#friday-s');
  var saturday = document.querySelector('#saturday-s');
  var sunday = document.querySelector('#sunday-s');

  if (day === 'monday') {
    monday.classList.remove('hidden');
    tuesday.classList.add('hidden');
    wednesday.classList.add('hidden');
    thursday.classList.add('hidden');
    friday.classList.add('hidden');
    saturday.classList.add('hidden');
    sunday.classList.add('hidden');
  } else if (day === 'tuesday') {
    monday.classList.add('hidden');
    tuesday.classList.remove('hidden');
    wednesday.classList.add('hidden');
    thursday.classList.add('hidden');
    friday.classList.add('hidden');
    saturday.classList.add('hidden');
    sunday.classList.add('hidden');
  } else if (day === 'wednesday') {
    monday.classList.add('hidden');
    tuesday.classList.add('hidden');
    wednesday.classList.remove('hidden');
    thursday.classList.add('hidden');
    friday.classList.add('hidden');
    saturday.classList.add('hidden');
    sunday.classList.add('hidden');
  } else if (day === 'thursday') {
    monday.classList.add('hidden');
    tuesday.classList.add('hidden');
    wednesday.classList.add('hidden');
    thursday.classList.remove('hidden');
    friday.classList.add('hidden');
    saturday.classList.add('hidden');
    sunday.classList.add('hidden');
  } else if (day === 'friday') {
    monday.classList.add('hidden');
    tuesday.classList.add('hidden');
    wednesday.classList.add('hidden');
    thursday.classList.add('hidden');
    friday.classList.remove('hidden');
    saturday.classList.add('hidden');
    sunday.classList.add('hidden');
  } else if (day === 'saturday') {
    monday.classList.add('hidden');
    tuesday.classList.add('hidden');
    wednesday.classList.add('hidden');
    thursday.classList.add('hidden');
    friday.classList.add('hidden');
    saturday.classList.remove('hidden');
    sunday.classList.add('hidden');
  } else if (day === 'sunday') {
    monday.classList.add('hidden');
    tuesday.classList.add('hidden');
    wednesday.classList.add('hidden');
    thursday.classList.add('hidden');
    friday.classList.add('hidden');
    saturday.classList.add('hidden');
    sunday.classList.remove('hidden');
  }
}
