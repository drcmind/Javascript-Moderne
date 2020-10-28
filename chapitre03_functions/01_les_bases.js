//Déclaration d'une fonction
function salutation(){
    console.log('Bonjour le monde !');
}

//Appelation d'une fonction
salutation();

//Expression fonctionnelle
const salutation2 = function(){
    console.log('Bonjour le monde 2!');
};

salutation2();

//fonction avec [argument ou paramètre]
const addition = function(a, b){
    const resultat = a+b;
    console.log(`la somme ${a} + ${b} est: ${resultat}`);
};

addition(2, 2);

//fonction avec [argument ou paramètre] qui retourne une valeur
const addition2 = function(a,b,c){
    const somme = a+b+c;
    return somme
}

const resultat = addition2(1,2,3);
console.log(resultat/3);

//Default parameter [paramètre par défaut]
const multiplicationPar2 = function(x, y=2){
    console.log(`${x} multiplié par 2 = ${x*y}`);
};

multiplicationPar2(6);

//Arrow function [fonction flechée] sans paramètre
const arrowFunction1 = () => console.log('Fonction flechée sans paramètre');

arrowFunction1();

//Arrow function avec un seul paramètre
const arrowFunction2 = nom => console.log(`Bonjour ${nom}`);

arrowFunction2('Musole');

//Arrow function avec plusieurs paramètres et plusieurs lignes de codes
const arrowFunction3 = (a,b) => {
    const res = a*b;
    console.log(`${a} multiplié par ${b} = ${res}`);
};

arrowFunction3(2,2);