/*Descrizione:
 Scrivere un programma che chieda all’utente:
-Il numero di chilometri da percorrere
-Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
-il prezzo del biglietto è definito in base ai km (0.21 € al km)
-va applicato uno sconto del 20% per i minorenni
-va applicato uno sconto del 40% per gli over 65. */

//funzione addeventlistener su button calcola + output dell'utente in console
const generate = document.getElementById('calcola').addEventListener("click", function() {
 const nomePasseggero = document.getElementById("name").value;
 console.log(nomePasseggero);
 const kmPercorrere = document.getElementById('km').value;
 console.log(kmPercorrere);
 const etaPasseggero = document.getElementById('age').value;
 console.log(etaPasseggero);

 if (kmPercorrere == 0 || nomePasseggero == 0) {
    result.innerHTML = "Uno o più elementi da lei inseriti non sono accettati.Riprova"
} 

else  

})
    








/*




    // if
    if ((numeroKm) && (etaPasseggero)) {
        // Calcolare il prezzo del biglietto
        const prezzoAlKm = 0.21;
        let prezzoIntero = numeroKm * prezzoAlKm;
        let prezzoScontato = 0;

        if (etaPasseggero < 18) {
            prezzoScontato = prezzoIntero * 0.2;
        } else if (etaPasseggero > 65) {
            prezzoScontato = prezzoIntero * 0.4;
        }

        let prezzoFinale = prezzoIntero - prezzoScontato;

        // Aggiorna il costo del biglietto nel biglietto stesso
        
        document.getElementById("costo_biglietto").textContent = prezzoFinale.toFixed(2) + '€';

        // Aggiorna il nome passeggero
        document.getElementById("nome_passeggero").textContent = nomePasseggero;
    } 
});

element.addEventListener("click", function() {
 console.log("")
}); */













// Chiedere all'utente il numero dei chilometri da percorrere
//const numeroKm = Number(prompt('Quanti chilometri vuoi percorrere?'));
//const etaPasseggero = Number(prompt('Quanti anni ha il passeggero?'));



// Scrivere l'output in pagina 
//document.getElementById("costo_ticket").innerHTML = 'Il tuo prezzo è di ' + prezzoFinale.toFixed(2) + '€';
