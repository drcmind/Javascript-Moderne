//Sauvegarder la réference d'élément dans un variable
const para = document.querySelector('p');
console.log(para);

//Sélection d'un élément avec réference
const para2 = document.querySelector('.error');
console.log(para2);

//Sélection complexe d'un élément
const divError = document.querySelector('div.error');
console.log(divError);

//Obtenir la référence d'un élément à partir du navigateur
const refNav = document.querySelector('body > h1');
console.log(refNav);

//Séléction multiple des éléments
const paras = document.querySelectorAll('p');
console.log(paras);

//Pour séléctioner un élément dans le NodeList
console.log(paras[0]);

//Utilisons [ForEach] pour faire parcourir le Nodelist
paras.forEach(para => console.log(para));

//Séléctionner toutes les classes avec le meme nom
const errors = document.querySelectorAll('.error');
console.log(errors);