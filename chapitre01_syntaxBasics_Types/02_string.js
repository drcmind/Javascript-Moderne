/*Le type de données [String] en Js définit un caractère ou
une chaine des caractères
 */

 console.log('A'); // un caractère
 console.log('Bonjour le monde!'); // Une chaine des caractères
 console.log("L'apprentissage de Js");

 //Déclaration et Affectation d'un variable du type [String]
 let email = 'email@gmail.com';
 console.log(email);

 //La concatenation d'un string a un autre
 let nom = 'Musole';
 let postNom = 'Blaise';
 let nomComplet = nom + ' ' +postNom;
 console.log(nomComplet);

 //Obtenir un caractère d'un string via une position
 console.log(nomComplet[1]);

 //Obtenir le nombre des caractères que contient d'un string
 console.log(nomComplet.length);

 //Fonction & Methodes d'un string
 /*1. Fonction : C'est un bloque des codes qui effectue une tache specifique
   2. Methode : C'est une fonction qui est attachée à un object ou type de données
  */

  //Methodes sans arguments ou paramètres
  console.log(nomComplet.toUpperCase());
  console.log(nomComplet.toLowerCase());

  //Methodes avec arguments ou paramètres
  console.log(nomComplet.indexOf('M'));
  console.log(nomComplet.slice(0, 8));
  console.log(nomComplet.replace('M', 'S'));