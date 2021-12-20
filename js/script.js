console.log("JS OK");

/* NOME 
COGNOME
COLORE PREFERITO
RECUPERO ELEMENTO DOVE STAMPARE
STAMPA */


// VARIABILI

const myName = prompt('Qual è il tuo nome?');
console.log(myName);

const mySurname = prompt('Qual è il tuo cognome?');
console.log(mySurname);

const myColor = prompt('Qual è il tuo colore preferito?');
console.log(myColor);

// FORMAZIONE PASSWORD

const passGenerated = `${myName}${mySurname}${myColor}21`;

console.log(passGenerated);


