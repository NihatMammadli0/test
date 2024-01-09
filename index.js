let cartQuantity = 0;

const showQuantity = document.getElementById('show-quantity');
const addToCart = document.getElementById('add-to-cart');
const plus2 = document.getElementById('plus-2');
const plus3 = document.getElementById('plus-3');
const resetCart = document.getElementById('reset-cart');
const input = document.getElementById('input');
const click = document.getElementById('click');


click.addEventListener('click', e => {
  if (input.value >= 18) {
    console.log('you selected');
  } else {
    console.log('you are too young for that');
  }
})




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
