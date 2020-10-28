//Boucle [while]
let i = 0;
while(i < 5){
    console.log('Dans la boucle While', i);
    i++
}

//Parcourir une liste des noms avec la boucle [While]
let noms = ['Musole', 'Blaise', 'Jonathan', 'Gloria'];
let j = 0;
while(j < noms.length){
    console.log(j, noms[j]);
    j++;
}

//Methode pour faire l'excution d'un bloque des codes avent la verification de la condition
let x = 6;
do{
    console.log('la valeur de x est: ', x);
    x++;
}while(x<5);