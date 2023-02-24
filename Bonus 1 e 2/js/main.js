

const containerDom = document.querySelector('.container');

for (let i = 1; i <= 100; i++ ) {

  const square = document.createElement('div');
  square.classList.add('box');
  square.append(i);
  containerDom.append(square);

  console.log(i);

  if(i % 3 == 0 && i % 5 == 0){

    square.classList.add('violet');
    square.innerHTML = 'fizzbuzz';
    console.log('fizzbuzz');
    
  } else if (i % 5 == 0){

    square.classList.add('blue');
    square.innerHTML = 'buzz';
    console.log('buzz');

  } else if (i % 3 == 0){

    square.classList.add('green');
    square.innerHTML = 'fizz';
    console.log('fizz');
  }
}


















