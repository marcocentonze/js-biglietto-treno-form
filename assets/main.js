/*Descrizione:
 Scrivere un programma che chieda all’utente:
-Il numero di chilometri da percorrere
-Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
-il prezzo del biglietto è definito in base ai km (0.21 € al km)
-va applicato uno sconto del 20% per i minorenni
-va applicato uno sconto del 40% per gli over 65. */


// Chiedere all'utente il numero dei chilometri da percorrere
const numeroKm = Number(prompt('Quanti chilometri vuoi percorrere?'));
const etaPasseggero = Number(prompt('Quanti anni ha il passeggero?'));

// Calcola il prezzo del biglietto in base ai chilometri (0.21 € al km)
const prezzoAlKm = 0.21;
let prezzoIntero = numeroKm * prezzoAlKm;
let prezzoScontato = 0;

// Applica gli sconti in base all'età
if (etaPasseggero < 18) {
    prezzoScontato = prezzoIntero * 0.2;
} else if (etaPasseggero > 65) {
    prezzoScontato = prezzoIntero * 0.4;
}

// Calcola il prezzo finale
let prezzoFinale = prezzoIntero - prezzoScontato;

// Stampa il prezzo finale in console 
console.log('Il tuo prezzo è di ' + prezzoFinale.toFixed(2) + '€');

// Scrivere l'output in pagina 
//document.getElementById("costo_ticket").innerHTML = 'Il tuo prezzo è di ' + prezzoFinale.toFixed(2) + '€';
