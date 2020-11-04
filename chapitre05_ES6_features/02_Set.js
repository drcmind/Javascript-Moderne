/*Set : fonctionne comme array (tableau)
mais avec des valeurs uniques
C'est un meilleur moyen de rétirer les doublons dans un array
 */

 const noms = ['Musole', 'Blaise', 'Daniel', 'Blaise', 'Daniel'];
 console.log(noms);

 //Déclataration du Set
 let set = new Set(noms);
 console.log(set);

 //Ajout d'un element dans le Set
 set.add('Gloiria');
 console.log(set);

 //Suppression d'un élément
 set.delete('Blaise');
 console.log(set);

 console.log(set.has('Blaise'));
console.log(set.values());
set.forEach(element => console.log(element));
set.clear()
console.log(set);