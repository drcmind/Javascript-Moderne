const contenu = document.querySelector('p');
console.log(contenu.classList);

//Ajouter et Retirer une classe
contenu.classList.add('error');
console.log(contenu.classList);

contenu.classList.remove('error');
console.log(contenu.classList);
contenu.classList.add('success');