//Obtenir l'élement par ID
const titre = document.getElementById('titre_de_page');
console.log(titre);

//Obtenir les éléments par le nom d'une classe
const errors = document.getElementsByClassName('error');
console.log(errors);

/*HTMLCollection est un peu different de NodeList
car il ne prend pas en charge la méthode [forEach]*/

console.log(errors[0]);
console.log(errors[1]);

//Obtenir les éléments par le nom de balise
const paras = document.getElementsByTagName('p');
console.log(paras);