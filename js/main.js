
/*
Ciao ragazzi,
Esercizio di oggi: FizzBuzz
nome repo: js-fizzbuzz
Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
**Prima di partire a scrivere codice poniamoci qualche domanda:**
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?
**Consigli del giorno:**
1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”
**BONUS 1:**
Crea un container nel DOM e aggiungi (attraverso la funzione `append()`) un elemento html con il numero o la stringa corretta da mostrare.
**BONUS 2:**
Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

*/




for (let i = 1; i <= 100; i++){

  if(i % 3 == 0){

    console.log('fizz');
    
  } else if (i % 5 == 0){

    console.log('buzz');

  } else if (i % 3 == 0 && i % 5 == 0){

    console.log('fizzbuzz');

  } else{

    console.log(i);
  }

  
}











//const containerDom = document.querySelector('.container');

/*
for (let i = 1; i <= 100; i++ ) {
    const quadratino = `<div class="square">${i}</div>`;
    containerDom.innerHTML += quadratino;

    */