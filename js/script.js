// Calcolo prezzo del treno:
// Il programma dovrà chiedere all’utente il
// numero di chilometri che vuole
// percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà
// calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai
// km (0.21 € al km), ma va applicato uno
// sconto del 20% per i minorenni e del
// 40% per gli over 65.

// Prompt età del passegero
// variabile
var etaPassegero = parseInt(prompt('La tua età?'));
// condizione
while (isNaN(etaPassegero)) {
  if (isNaN(etaPassegero)) {
    console.log(etaPassegero);
    alert('NON HAI INSERITO UN NUMERO');
  }
  var etaPassegero = parseInt(prompt('La tua età?'));
}
// verifica via console
console.log('La tua età è di', etaPassegero,'anni');

// Promt km di percorrenza
// variabile
var kmPercorrenza = parseInt(prompt('Quanti kilometri dovrai percorrere?'));
// condizione
while (isNaN(kmPercorrenza)) {
  if (isNaN(kmPercorrenza)) {
    alert('NON HAI INSERITO UN NUMERO');
  }
  var kmPercorrenza = parseInt(prompt('Quanti kilometri dovrai percorrere?'));
}
// verifica via console
console.log('La distanza che dovrai percorrere è di', kmPercorrenza,'km');

// variabili
var costoKm = 0.21;

// sconti
var scontoMinorenni = 0.8;
var scontoOver65 = 0.6;

// costo biglietto
var prezzoBiglietto = Math.ceil(costoKm * kmPercorrenza);
// costo biglieto minorenni
if (etaPassegero < 18) {
  console.log('Il costo del tuo biglietto è: €',prezzoBiglietto * scontoMinorenni);
}
// costo biglieto over 65
else if (etaPassegero >= 65) {
  console.log('Il costo del tuo biglietto è: €',prezzoBiglietto * scontoOver65);
}
// costo biglietto prezzo pieno
else {
  console.log('Il costo del tuo biglietto è: €',prezzoBiglietto);
}
