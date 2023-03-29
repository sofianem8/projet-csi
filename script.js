// Masquer le bouton d'inscription pour Anonyme et Agent municipal
const select = document.querySelector('#identification');
const inscriptionButton = document.querySelector('#inscription-button');

select.addEventListener('change', () => {
  if (select.value === 'agent' || select.value === 'anonyme') {
    inscriptionButton.classList.add('hidden');
  } else {
    inscriptionButton.classList.remove('hidden');
  }
});

// Masquer les cases identifiants et mot de passe pour se connecter
const selectEl = document.getElementById('identification');
const fieldsEl = document.getElementById('identification-fields');

selectEl.addEventListener('change', () => {
  if (selectEl.value === 'habitant' || selectEl.value === 'agent') {
    fieldsEl.classList.remove('hidden');
  } else {
    fieldsEl.classList.add('hidden');
  }
});
