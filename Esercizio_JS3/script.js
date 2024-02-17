// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/


// Oggetti che rappresentano gli utenti che sono nel nostro e-commerce
const marco = {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
};
  
const paul = {
    name: "Paul",
    lastName: "Flynn",
    isAmbassador: false,
};
  
const amy = {
    name: "Amy",
    lastName: "Reed",
    isAmbassador: false, 
};

const gabriele = {
    name: "Gabriele",
    lastName: "Romano",
    isAmbassador: true,
};


//Lista dei prezzi degli oggetti attualmente nel carrello
let prices = [34, 5, 2,]
//console.log(prices.length);

//Costo fisso delle spedizioni
const shippingCost = 50

//Utente che al momento corrente sta effettuando l'acquisto
let utenteCheEffettuaLAcquisto = amy //cambia il valore qui per provare se il tuo algoritmo funziona!

function calcoloDelCostoTotale (user, prices) {
    
    //Costo del carrello iniziale
    let totalCost = 0;

    console.log("Carrello iniziale vuoto: " + totalCost);

    //Calcolo del costo totale degli oggetti che stanno nel carrello
    for (let i = 0; i < prices.length; i++) {
        totalCost = totalCost + prices[i];
    }

    console.log("Costo degli articoli nel carrello: " + totalCost);

    //se l'utente è ambassador allora applico sconto del 30%
    if (user.isAmbassador) {
        totalCost = totalCost * 0.7    
    }

    console.log("Applicazione dello sconto Ambassador del 30%: " + totalCost);

    //Se il costo totale è inferiore a 100€, aggiungiamo il costo di 50€
    if (totalCost <= 100) {
        totalCost += shippingCost;
    }
    console.log("Aggiunta dei costi di spedizione se inferiore a 100€: " + totalCost);

}

calcoloDelCostoTotale (gabriele, prices);

//Inseriamo gli utenti nell'array richiesto
const listaDegliUtenti = [];
listaDegliUtenti.push (marco, paul, amy, gabriele);
console.log(listaDegliUtenti);

for (let i = 0; i < listaDegliUtenti.length; i++) {

    let frase = ` ${listaDegliUtenti [i] .name} ${listaDegliUtenti[i] .lastName} `

    //controllo se è o non è un ambassador
    if(!listaDegliUtenti[i].isAmbassador) {
        frase += "Non "
    } else {
        frase += "è "
    }

    frase += "un ambassador "

    console.log(frase);

}

let utentiSoloAmbassador = [];
for (let i = 0; i < listaDegliUtenti.length; i++) {
  if(listaDegliUtenti[i].isAmbassador) {
    utentiSoloAmbassador.push(listaDegliUtenti[i])
  }
}
console.log(utentiSoloAmbassador);
