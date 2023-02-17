
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
  console.log(day);
}
