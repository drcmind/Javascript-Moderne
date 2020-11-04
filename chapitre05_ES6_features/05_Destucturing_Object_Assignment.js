//La puissance de la déstructuration d'affectation est plus utilisée pour les objects
const personne1 = {
    nom : 'Musole',
    postNom : 'Gloire',
    age : 32,
    addresse : {
        pays : 'xxx',
        ville : 'yyy'
    }
}

//Déstructuraction d'un object
const {nom, age, addresse : {ville, pays}} = personne1;
console.log(nom, age, pays, ville);

const personne2 = {...personne1, nom : 'Blaise'}

//Fonction avec destructuration en paramètre (argument)
const affichagePersonnes = ({nom, postNom, age, addresse : {pays, ville}}) => {
    console.log(
        `${nom} ${postNom} a ${age} ans et son addresse est
        ${pays} - ${ville}`
        );
};

affichagePersonnes(personne1);
affichagePersonnes(personne2)