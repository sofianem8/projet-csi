// Masquer le bouton d'inscription pour Anonyme et Agent municipal
const select = document.querySelector('#identification');
const inscriptionButton = document.querySelector('#inscription-button');

select.addEventListener('change', () => {
  if (select.value === 'agent' || select.value === 'anonyme') {
    inscriptionButton.classList.add('d-none');
  } else {
    inscriptionButton.classList.remove('d-none');
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

// Afficher les signalements en cours
const signalementsContainer = document.querySelector('#signalements-container');

// Fonction pour récupérer les signalements depuis la base de données
function getSignalements() {
  fetch('http://mon-serveur.com/signalements-en-cours')
    .then(response => response.json())
    .then(signalements => {
      // Pour chaque signalement, on crée une carte et on l'ajoute au conteneur
      signalements.forEach(signalement => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <h2>${signalement.titre}</h2>
          <p>${signalement.description}</p>
          <p><strong>Adresse :</strong> ${signalement.adresse}</p>
          <p><strong>Date :</strong> ${signalement.date}</p>
          <p><strong>Statut :</strong> ${signalement.statut}</p>
        `;
        signalementsContainer.appendChild(card);
      });
    });
}

// Appel de la fonction pour récupérer les signalements au chargement de la page
getSignalements();

