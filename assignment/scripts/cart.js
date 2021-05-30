console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
console.log(basket);
// checked to make sure array is complete
function additem(oranges) {
  var string= 'item';
  basket.push('oranges');
  return (true);

}
console.log('Item was added',additem());
//first attempt base model works fine..
console.log(`Basket is ${basket}`);
//testing with example

basket.push('apples');
basket.push('pears');
function listItems() {
} for (let i=0; i<basket.length; i++) {
  console.log (basket[i]);
}
// Added another item so it wasnt just 2, i think i am having to look
// through old assignments to often for completion. going to re work first weeks stuff
// starting tommorrow.
function empty (){
  basket.length = 0;
}
empty();
console.log(`basket is now ${basket}`);
console.log(`basket is now 'empty'${basket}`);
