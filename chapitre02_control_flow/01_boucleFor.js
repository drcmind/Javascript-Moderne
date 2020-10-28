//Boucle [loop] : c'est une structure de controle
// qui permet de répéter un bloque de code

//Boucle [For]
for(let i=0; i<5; i++){
    console.log('Interaction en boucle', i);
}

console.log("Une instruction en dehors de la boucle");

//Parcourir les éléments de la liste avec la boucle [for]
let noms = ['Musole', 'Blaise', 'Alice', 'Daruis Tanz'];
for(let i=0; i<noms.length; i++){
    console.log(i, noms[i]);
}