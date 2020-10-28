const chaineYtb = 'DrcMind';
const proprio = 'Blaise';
const nbreVideos = 50;

//Concatenation
console.log('La chaine youtube ' + chaineYtb + ' de Mr ' + proprio + ' contient ' + nbreVideos + ' vidèos');

//template string
console.log(`La chaine youtube ${chaineYtb} de Mr ${proprio} contient ${nbreVideos} vidéos`);

//html template
let html = `
    <h2>${chaineYtb}</h2>
    <p>${proprio}</p>
    <span>${nbreVideos}</span>
`;

console.log(html);