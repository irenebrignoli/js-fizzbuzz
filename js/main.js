
/*

**BONUS 1:**
Crea un container nel DOM e aggiungi (attraverso la funzione `append()`) un elemento html con il numero o la stringa corretta da mostrare.
**BONUS 2:**
Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

*/


for (let i = 1; i <= 100; i++){

  if(i % 3 == 0 && i % 5 == 0){

    console.log('fizzbuzz');
    
  } else if (i % 5 == 0){

    console.log('buzz');

  } else if (i % 3 == 0){

    console.log('fizz');

  } else{

    console.log(i);
  }

  
}












