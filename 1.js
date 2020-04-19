var price = 20;
var isSale = true;

// variable shadowing
// let & const - block-scoped
if (isSale) {
  // discount price of product
  let price = 20 - 2; 
  // do something 
  console.log('sale price', price);
}

console.log('price', price);