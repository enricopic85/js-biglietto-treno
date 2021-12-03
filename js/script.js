/*Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca */


//PASSAGGI

//chiedo all'utente il numero di km
let km=parseInt(prompt("Inserisci i km che vuoi percorrere"));
//chiedo all'utente l'eta
let eta=parseInt(prompt("Inserisci l'età"));

//faccio un controllo che l'utente inserisca effettivamente numeri e non stringhe
if (isNaN(km) || isNaN(eta)) {
    let error=document.getElementById("error").innerHTML="Devi inserire un numero in entrambi i campi"
} else{
    // calcolo il prezzo del biglietto
    let costoTicket=parseFloat(0.21*km);
    if (eta < 18) {
        //applico le varie condizioni a seconda dell'eta
        let scontoMinorenni=parseFloat( costoTicket - (costoTicket * 0.2));
        document.getElementById("output").innerHTML= `ciao, il costo della tua tratta è ${scontoMinorenni.toPrecision(4)} &euro;`;
     } else if (eta > 65) {
         let scontoAnziani=parseFloat(costoTicket - (costoTicket* 0.40))
         document.getElementById("output").innerHTML= `ciao, il costo della tua tratta è ${scontoAnziani.toPrecision(4)} &euro;`;
     } else{
         document.getElementById("output").innerHTML= `ciao, il costo della tua tratta è ${costoTicket.toPrecision(2)} &euro;`;
     }
}


