//Destructuring assignment : La déstructuration d'affectation
const alphabet = ['A','B','C','D','E'];
const numeros = [1,2,3,4,5,6,7,8,9,0];

//Déstructuraction
const [a, ...rest] = alphabet;
console.log(a, rest);

//Déstructuration pour la fonction
const operationArthmetic = (x,y) => {
    return [
        `${x} + ${y} = ${x+y}`,
        `${x} - ${y} = ${x-y}`,
        `${x} x ${y} = ${x*y}`,
        `${x} / ${y} = ${x/y}`,
        `La moyenne de ${x} et ${y} est ${(x+y)/2}`
    ];
};

const [addition, soustraction, multiplication, division, moyenne = 'Pas de moyenne'] 
= operationArthmetic(5,2);

console.log(addition);
console.log(soustraction);
console.log(multiplication);
console.log(division);
console.log(moyenne);

