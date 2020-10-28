//Object literal
let utilisateur = {
    nom : 'Musole',
    age : 25,
    email : 'musole@gmail.com',
    location : 'DR Congo',
    blogs : [
        {
            titre : 'Javascript pour débutants',
            likes : 30
        },
        {
            titre : 'Kotlin pour débutants',
            likes : 70
        }
    ],
    afficherBlogs(){
        console.log('cet utilisateur a ecrit ces blogs : ');
        this.blogs.forEach(blog => {
            console.log(blog.titre, blog.likes);
        })
    }
};

//Affichage d'un objet
console.log(utilisateur);

//Affichage d'un attribut d'un object
console.log(utilisateur.nom);

//Réaffectation d'une valeur à un attribut
console.log(utilisateur.nom = 'Blaise');

//Une autre manière d'afficher un object
console.log(utilisateur['nom']);
console.log(utilisateur['email']);
console.log(utilisateur['email'] = 'janathan@gmail.com');
console.log(typeof utilisateur);
console.log(utilisateur.afficherBlogs());