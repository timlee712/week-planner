
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

button.addEventListener('click', daySwap);

function daySwap(e) {
  var days = e.target.getAttribute('id');
  console.log('days:', days);
  console.log('e.target', e.target);
}
