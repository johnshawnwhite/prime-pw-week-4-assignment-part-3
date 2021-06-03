console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];  /// global variable//
const MAX_ITEMS = 3;
console.log(basket);
// checked to make sure array is complete
function additem(item) {
  basket.push(item); //// nothing added yet, have not called function
  return (true);
}

//

additem('oranges');
//first attempt base model works fine..
console.log(`Basket is ${basket}`);
//testing with example
additem('bananas');
console.log(`basket is ${basket}`);
additem('blueberries');
console.log(`basket is ${basket}`);
additem('pears');
function listItems() {
} for (let i=0; i<basket.length; i++) {
  console.log (basket);
}
function empty (){
  basket.length = 0;
}
empty();
console.log(`basket is now ${basket}`);
console.log(`basket is now 'empty'${basket}`);
