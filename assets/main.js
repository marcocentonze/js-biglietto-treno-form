/*Descrizione:
 Scrivere un programma che chieda all’utente:
-Il numero di chilometri da percorrere
-Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
-il prezzo del biglietto è definito in base ai km (0.21 € al km)
-va applicato uno sconto del 20% per i minorenni
-va applicato uno sconto del 40% per gli over 65. */
// Calcola il prezzo del biglietto in base ai chilometri (0.21 € al km)


//creo la funzione e inserisco tutto dentro(fuori non funzionerebbe)
const generate = document.getElementById('calcola').addEventListener("click", function() {
    const nomePasseggero = document.getElementById("name").value;
    console.log(nomePasseggero);
    const kmPercorrere = Number(document.getElementById('km').value);
    console.log(kmPercorrere);
    const etaPasseggero = Number(document.getElementById('age').value);
    console.log(etaPasseggero);


    if (kmPercorrere == 0 || nomePasseggero == "" ) {
        alert = ("Uno o più elementi da lei inseriti non sono accettati.Riprova");
    } else {
        const prezzoAlKm = 0.21;
        let prezzoIntero = kmPercorrere * prezzoAlKm;
        let prezzoScontato = prezzoIntero;

        // Applico gli sconti in base all'età
        if (etaPasseggero < 18) {
            prezzoScontato = prezzoIntero * 0.8; // Sconto del 20%
        } else if (etaPasseggero > 65) {
            prezzoScontato = prezzoIntero * 0.6; // Sconto del 40%
        }

        // Calcolo il prezzo finale
        let prezzoFinale = prezzoScontato;

        // Opzioni per l'offerta
        const offerte = ["Standard", "Economica", "Prima Classe", "Seconda Classe"];
        const indiceCasualita = Math.floor(Math.random() * 4); // in questo modo si genera un numero da 0 a 3(perchè parte da 0)
        const offertaCasuale = offerte[indiceCasualita];

        // Genero numeri casuali per Offerta, Carrozza e il Codice CP
       
        const carrozzaCasuale = Math.floor(Math.random() * 10) + 1; // 
        const codiceCPCasuale = Math.floor(Math.random() * 100000); // 6 numeri

        // Aggiorno i dettagli nel biglietto del passeggero
        document.getElementById("nome_passeggero").textContent = nomePasseggero;
        document.getElementById("costo_biglietto").textContent = prezzoFinale.toFixed(2) + " €";
        document.getElementById("offerta").textContent = offertaCasuale;
        document.getElementById("carrozza").textContent = carrozzaCasuale;
        document.getElementById("codice_cp").textContent = codiceCPCasuale;
    }
});

