//Arrays (Tableau) C'est une collection de données en Js, il est du type [object]

let noms = ['Musole', 'Blaise', 'Jonathan'];
console.log(noms);
console.log(noms[0]);

let ages = [10, 20, 30];
console.log(ages);
console.log(ages[1]);

let tableauAleatoire = ['Musole', 20, 20.3];
console.log(tableauAleatoire);
console.log(tableauAleatoire.length);

//Quelques methodes du tableau
console.log(noms.join(['-']));
console.log(noms.indexOf('Blaise'));
console.log(noms.concat(['Marry', 'Bulambo']));
console.log(noms.push('Rachel'));
console.log(noms);
console.log(noms.pop());
console.log(noms);