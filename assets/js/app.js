/* Verifica del collegamento File */
/* alert("Ciao, sono il file App") */

/* Questa è la costante degli input disabilitata. con questa pesco il div genitore */
const inputs = document.querySelector(".inputs")
/* Questa variabile è, a tutti gli effetti, il button principale per resettare il gioco */
resetButton = document.querySelector(".reset-btn")


/**
 * Funzione per pescare oggetto randomico
 * @ranObj => string che va a pescare, dall'array di parole una sezione a caso grazie a mathfloor
 */
function randomWord() {
    /* Questo è l'oggetto randomico */
    let ranObj = wordList[Math.floor(Math.random() * wordList.length)]
    /* Questa è la sola parola */
    let word = ranObj.word
    console.log("Questa è la verifica dell'oggetto randomico");
    console.log(ranObj);
    console.log(`Questa è la verifica della parola randomica : ${word}`);
    /* Ora creo la zona di input in relazione alla lunghezza delle parole randomiche */
    /* Inizialmente vuota */
    let html = "";
    /* Avvio ciclo for */
    for (let i = 0; i < word.length; i++) {
        /* Essendo html inizialmente vuota la devo sommare poi nell'operazione */
        html = html + `<input type="text" disabled>`;
    }
    /* Verifico la variabile html */
    console.log(`Questa è la verifica della variabile html : ${html}`);
    /* Ora appendo il ciclo for alla mia const inputs */
    inputs.innerHTML = html
}

/* La invoco per effettuare il ciclo della parola randomica */
randomWord();

/* Aggiungo evento al click al reset button */
/* In questo modo, ad ogni click cambio la parola randomica grazie alla function randomWord */
resetButton.addEventListener("click", randomWord)