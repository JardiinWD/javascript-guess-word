/* Verifica del collegamento File */
/* alert("Ciao, sono il file App") */

/* Questa è la costante degli input disabilitata. con questa pesco il div genitore */
const inputs = document.querySelector(".inputs")
/* Questa variabile è, a tutti gli effetti, il button principale per resettare il gioco */
resetButton = document.querySelector(".reset-btn")
/* ora pesco la classe della domanda */
hint = document.querySelector(".hint span")
/* ora pesco l'input dell'utente */
typingInput = document.querySelector(".typing-input")

/* Parola */
let word;


/**
 * Funzione per pescare oggetto randomico
 * @ranObj => string che va a pescare, dall'array di parole una sezione a caso grazie a mathfloor
 */
function randomWord() {
    /* Questo è l'oggetto randomico */
    let ranObj = wordList[Math.floor(Math.random() * wordList.length)]
    /* Questa è la sola parola */
    word = ranObj.word
    console.log("Questa è la verifica dell'oggetto randomico");
    console.log(ranObj);
    console.log(`Questa è la verifica della parola randomica : ${word}`);
    /* Alla mia costante hint (riga 9) appendo la suggestion hint del mio random object */
    /* Questa è dinamica e randomica */
    hint.innerHTML = ranObj.hint


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

/**
 * Funzione per ascoltare l'input e i caratteri dettati dall'utente
 * @param {string} element input dettato dall'utente
 */
function initGame(element) {
    let key = element.target.value;
    console.log(`Questa è la verifica della variabile key : ${key}`);
    /* Aggiungo una condizione nel caso in cui l'utente, magari un pò scemo, scrive un numero invece di una lettera */
    if (key.match(/^[A-Za-z]+$/)) {
        console.log(key);
        /* Condizione per verificare se quello digitato dall'utente è presente nella parola*/
        if (word.includes(key)) {
            console.log("Lettera trovata");
        } else {
            /* Altrimenti se non la trovo esce questo */
            console.log("Lettera non trovata");
        }
    }
}


/* Evento dell'input utente */
typingInput.addEventListener("input", initGame)
document.addEventListener("keydown", () => typingInput.focus())