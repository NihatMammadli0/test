let cartQuantity = 0;

const showQuantity = document.getElementById('show-quantity');
const addToCart = document.getElementById('add-to-cart');
const plus2 = document.getElementById('plus-2');
const plus3 = document.getElementById('plus-3');
const resetCart = document.getElementById('reset-cart');
const input = document.getElementById('input');
const click = document.getElementById('click');

const dot = document.getElementById('contanier');


click.addEventListener('click', e => {
  // Get the input value
  const inputValue = input.value;

  // Try to parse the input value as an integer
  const parsedValue = parseInt(inputValue);

  // Check if the parsedValue is a valid integer
  if (!isNaN(parsedValue) && Number.isInteger(parsedValue)) {
    console.log('You entered a valid integer.');
  } else {
    console.log('Please enter a valid integer.');
  }
});


window.addEventListener('mousemove', e => {
  let x = e.clientX;
  let y = e.clientY;

  // Set the dot position
  dot.style.left = x + 'px';
  dot.style.top = y + 'px';

  dot.animate({
    left: x , top: y},
    {duration:4000,
    easing:ease}
  )
});





// addToCart.addEventListener('click', e => {
//   cartQuantity++;
//   console.log(`card quantity: ${cartQuantity}`);  
// })

// showQuantity.addEventListener('click', e => {
//   console.log(`The overall card quantity: ${cartQuantity}`);  
// })

// plus2.addEventListener('click', e => {
//   cartQuantity = cartQuantity + 2;
//   console.log(`card quantity: ${cartQuantity}`);  
// })

// plus3.addEventListener('click', e => {
//   cartQuantity = cartQuantity + 3;
//   console.log(`card quantity: ${cartQuantity}`);  
// })

// resetCart.addEventListener('click', e => {
//   cartQuantity = 0;
//   console.log(`card quantity reseted: ${cartQuantity}`);  
// })
