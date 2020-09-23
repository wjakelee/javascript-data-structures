// this file is used to run examples of each data structure

const DoublyLinkedList = require('./DoublyLinkedList');
const Stack = require('./Stack');
const Queue = require('./queue');
const HashMap = require('./HashMap');

//Linked List example:

const subway = new DoublyLinkedList();

subway.addToHead('TimesSquare');
subway.addToHead('GrandCentral');
subway.addToHead('CentralPark');

subway.addToTail('PennStation');
subway.addToTail('WallStreet');
subway.addToTail('BrooklynBridge');

subway.removeHead();
subway.removeTail();

subway.removeByData('TimesSquare');
subway.printList();

// --------------------------------------------------------------------

// //Stack example:

// // 1. Define an empty pizza stack with a maxSize of 6
// const pizzaStack = new Stack(6);

// // 2. Add pizzas as they are ready until we fill up the stack
// for (let i=1; i < 7; i++) {
//   pizzaStack.push('Pizza #'+i);
// }

// // 3. Try pushing another pizza to check for overflow
// try {
//   pizzaStack.push('Pizza #7');
// } catch(e) {
//   console.log(e);
// }

// // 4. Peek at the pizza on the top of stack and log its value
// console.log('The first pizza to deliver is', pizzaStack.peek());

// // 5. Deliver all the pizzas from the top of the stack down
// for (let i=0; i < 6; i++) {
//   pizzaStack.pop();
// }

// // 6. Try popping another pizza to check for empty stack
// try {
//   pizzaStack.pop();
// } catch(e) {
//   console.log(e);
// }

//--------------------------------------------------------------------------

// Queue example:
// const boundedQueue = new Queue(3);

// boundedQueue.enqueue(1);
// boundedQueue.enqueue(2);
// boundedQueue.enqueue(3);

// boundedQueue.dequeue();
// boundedQueue.dequeue();
// boundedQueue.dequeue();

// -------------------------------------------------------------------

//HashMap Example:
// const birdCensus = new HashMap(16);
// birdCensus.assign('mandarin duck', 'Central Park Pond');
// birdCensus.assign('monk parakeet', 'Brooklyn College');
// birdCensus.assign('horned owl', 'Pelham Bay Park');

// birdCensus.retrieve('mandarin duck');
// birdCensus.retrieve('monk parakeet');
// birdCensus.retrieve('horned owl');