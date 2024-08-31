console.log('Hello, world!');
let x;
console.log(x);
x = 5;
console.log(x);

let button = document.querySelector('button');
button.addEventListener('click', () => {
  console.log('Button clicked');
  let x = Number(document.querySelector('#number1').value);
  let y = Number(document.querySelector('#number2').value);
  console.log(x + y);
});
