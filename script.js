const select = document.querySelector('#identification');
const inscriptionButton = document.querySelector('#inscription-button');

select.addEventListener('change', () => {
  if (select.value === 'agent' || select.value === 'anonyme') {
    inscriptionButton.classList.add('hidden');
  } else {
    inscriptionButton.classList.remove('hidden');
  }
});
