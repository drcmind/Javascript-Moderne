/*
le type de données [Number] en Js prend charge tout type de chiffres
et nombres comme [integer, double, float, etc..]*/

let nbreEntier = 12;
let nbreDecimal = 15.2;

console.log(nbreEntier);
console.log(nbreDecimal);
console.log(typeof nbreEntier, typeof nbreDecimal);

//Operateurs mathematiques [+, -, *, /, **, %]
console.log(2 * (nbreEntier + nbreDecimal) ** 3);

let likes = 50;

likes = likes + 1;
console.log(likes);

likes++
console.log(likes);

likes--
console.log(likes);

likes += 10;
console.log(likes);

likes -=10;
console.log(likes);

likes *=2;
console.log(likes);

//NaN (Not a Number) C'est pas un nombre
console.log('bonjour' / 2);

//Concatenation d'un string à number
console.log('La publication de Blaise a ' + likes + ' likes');