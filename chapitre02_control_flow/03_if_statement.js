//La déclaration conditionnelle
let age = 60;

if(age > 18){
    console.log('Vous etes adulte');
}else{
    console.log('Vous etes mineure');
}

//Operateur logique [&&] pour concatenation d'une suite conditionnelle
if(age >= 1 && age <= 17){
    console.log('Vous etes mineure');
}else if(age >= 18 && age <= 50){
    console.log('Vous etes adulte');
}else{
    console.log('Vous etes vieux');
}

//Operateur logique [||]
let email = 'email@gmail.com';
if(email.includes('@') || email.includes('gmail.com')){
    console.log('Email est valide')
}else{
    console.log('Email est invalide');
}