/* Map : fonctionne comme un object literal 
c'est un ensemble des données paires [clé-valeur]
mais la [clé] doit etre unique
*/

//La déclaration d'un Map
let map = new Map()

//La methode [set()] pour faire l'affectation
map.set('nom', 'Musole');
map.set('age', 30);

//Affichage du Map en console
console.log(map);

//clé unique
map.set('age', 50);
console.log(map);

//Pour obtenir le nombre d'elements d'un Map
console.log(map.size);

//Pour obtenir un element du Map
console.log(map.get('nom'));
console.log(map.get('age'));

//Verification si un element fait partie du Map
console.log(map.has('age'));

//Obtenir les [clés] ou [valeurs]
console.log(map.keys());
console.log(map.values());

//La methode forEach
map.forEach(element => console.log(element));

//Suppression des elements du Map
map.clear()
console.log(map);