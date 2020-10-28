//Callback en Js c'est une fonction passée en paramètre d'une autre fonction
const myFun = (callbackFunc) => {
    //implementation d'une suite d'instruction
    let num = 100;
    callbackFunc(num);
};

myFun((numero) => {
  //implementer une suite d'instruction
  console.log(numero);
});

//ForEach est utilisé pour interagir avec les éléments d'une collection de données
let etudiants = ['Musole', 'Jonathan', 'Isaac'];
etudiants.forEach((etudiant, index) => console.log(index, etudiant));

//ForEach avec un callback separé
const listEtudiant = (etudiant, index) => console.log(`${index} Salut ${etudiant}`);
etudiants.forEach(listEtudiant);