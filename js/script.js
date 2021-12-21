console.log("JS OK");

/* NOME 
COGNOME
COLORE PREFERITO
RECUPERO ELEMENTO DOVE STAMPARE
STAMPA */


// VARIABILI

const myName = prompt('Qual è il tuo nome?').trim();
console.log(myName);

const mySurname = prompt('Qual è il tuo cognome?').trim();
console.log(mySurname);

const myColor = prompt('Qual è il tuo colore preferito?').trim();
console.log(myColor);

// FORMAZIONE PASSWORD

const passGenerated = `${myName}${mySurname}${myColor}21`;

console.log(passGenerated);

// RECUPERO ELEMENTO

const passResult = document.getElementById('pass-generated');

// PRINT IN PAGINA

passResult.innerHTML = `La tua password è: <strong>${passGenerated}</strong>`
