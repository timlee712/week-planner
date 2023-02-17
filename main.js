
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
