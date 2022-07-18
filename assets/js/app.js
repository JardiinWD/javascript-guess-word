/* Verifica del collegamento File */
/* alert("Ciao, sono il file App") */

/* Questa è la costante degli input disabilitata. con questa pesco il div genitore */
const inputs = document.querySelector(".inputs")
/* Questa variabile è, a tutti gli effetti, il button principale per resettare il gioco */
resetButton = document.querySelector(".reset-btn")
/* ora pesco la classe della domanda */
hint = document.querySelector(".hint span")
/* Pesco il div di tentativi rimasti */
guessLeft = document.querySelector(".guess-left span")
/* Lettera sbagliata */
wrongLetter = document.querySelector(".wrong-letter span")



/* ora pesco l'input dell'utente */
typingInput = document.querySelector(".typing-input")

/* Parola */
let word, maxGuess, corrects = [], incorrects = [];


/**
 * Funzione per pescare oggetto randomico
 * @ranObj => string che va a pescare, dall'array di parole una sezione a caso grazie a mathfloor
 */
function randomWord() {
    /* Questo è l'oggetto randomico */
    let ranObj = wordList[Math.floor(Math.random() * wordList.length)]
    /* Questa è la sola parola */
    word = ranObj.word
    /* Tentativi massimi dell'utente */
    maxGuess = 8

    /*  
        console.log("Questa è la verifica dell'oggetto randomico");
        console.log(ranObj);
        console.log(`Questa è la verifica della parola randomica : ${word}`); 
    */

    /* Alla mia costante hint (riga 9) appendo la suggestion hint del mio random object */
    /* Questa è dinamica e randomica */
    hint.innerHTML = ranObj.hint
    /* Tentativi massimi */
    guessLeft.innerHTML = maxGuess

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
    /* Condizione necessaria per digitare le lettere */
    if (key.match(/^[A-Za-z]+$/) && !incorrects.includes(`${key}`) && !corrects.includes(key)) {
        console.log(key);
        /* Condizione per verificare se quello digitato dall'utente è presente nella parola*/
        if (word.includes(key)) {
            /* Se cosi fosse avvio un ciclo, con la lunghezza totale della parola */
            for (let i = 0; i < word.length; i++) {
                /* Dove se la parola (word) corrisponde alla key */
                if (word[i] === key) {
                    /* Se fosse corretta la pusho nel mio array vuoto */
                    corrects.push(key)
                    /* io appendo alla costante inputs questa parola dicendo che il valore
                    dell'input equivale a Key */
                    inputs.querySelectorAll("input")[i].value = key
                }
                console.log("Lettera trovata");
            }
        } else {
            /* Altrimenti se non la trovo esce questo */
            /* Abbasso il numero di tentativi */
            maxGuess--;
            /* console.log("Lettera non trovata"); */
            incorrects.push(`${key}`);
        }
        guessLeft.innerHTML = maxGuess
        /* In caso di lettera sbagliata */
        wrongLetter.innerText = incorrects;
    }

    /* Eseguo il clear dell'input una volta che l'utente ha digitato una lettera */
    typingInput.value = ""

}


/* Evento dell'input utente */
typingInput.addEventListener("input", initGame)
document.addEventListener("keydown", () => typingInput.focus())