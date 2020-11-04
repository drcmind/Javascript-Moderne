//Rest operotor
const addition = (...nombres) => {
    return nombres.forEach(nombre => {
        console.log(`${nombre} x ${nombre} = ${nombre*nombre}`);
    });
};

const resultat = addition(10,20,30,40);
console.log(resultat);

//Spread Operator
//Copier les éléments d'un array dans un nouveau array
const eleves4ieme = ['Musole', 'Tarzan', 'Michou'];
const eleves5ieme = [...eleves4ieme, 'Eric Thomas', 'Coach Pain', 'Sonny Court'];
console.log(eleves4ieme);
console.log(eleves5ieme);

//Passer les éléments d'un array comme paramètre d'une fonction
const tousEleves = (laListeFinal) => {
    laListeFinal.forEach((eleve, index) => {
        console.log(`${index+1}) ${eleve}`);
    });
};

tousEleves([...eleves5ieme, 'Hilaire', 'Jonathan']);