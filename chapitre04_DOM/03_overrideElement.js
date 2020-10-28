const para = document.querySelector('p');
console.log(para.innerText);

//Modification du contenu du paragraphe
para.innerText = 'Nous décollons déjà avec Js';

//Ajouter du text à paragraphe existant
para.innerText += ', Merci DrcMind';

//Modification de tous les paragraphes
const paras = document.querySelectorAll('p');
paras.forEach(para => console.log(para.innerText += ' Nouveau text ajouté'));

//Modification de balise HTML
const contenu = document.querySelector('.contenu');
console.log(contenu.innerHTML);

//Modification
contenu.innerHTML += "<h2>Ravis d'etre abonné sur DrcMind</h2>";

//similation des données
const noms = ['Musole', 'Blaise', 'Asifiwe'];
noms.forEach(nom => contenu.innerHTML += `<p>${nom}</p>`);