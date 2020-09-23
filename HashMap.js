const LinkedList = require('./DoublyLinkedList');
const Node = require('./Node');

//Hashmap class that utilizes separate chaining for collisions
class HashMap {
  // creates an array of linked lists
  constructor(size = 0) {
    this.hashmap = new Array(size)
      .fill(null)
      .map(() => new LinkedList());
  }

  //hashing method
  hash(key) {
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
      hashCode += hashCode + key.charCodeAt(i);
    }
    return hashCode % this.hashmap.length;
  }

  // method assigns key and value to proper index according to hashing method
  assign(key, value) {
    const arrayIndex = this.hash(key);
    const linkedList = this.hashmap[arrayIndex];
    console.log(`Storing ${value} at index ${arrayIndex}`);
    if (linkedList.head === null) {
      linkedList.addToHead({ key, value });
      return;
    }
    let current = linkedList.head;
    while (current) {
      if (current.data.key === key) {
        current.data = { key, value };
      }
      if (!current.next) {
        current.next = new Node({ key, value });
        break;
      }
      current = current.next;
    }
  }

  //method retrieves the value at the specified key in the array 
  retrieve(key) {
    const arrayIndex = this.hash(key);
    let current = this.hashmap[arrayIndex].head;
    while (current) {
      if (current.data.key === key) {
        console.log(`\nRetrieving ${current.data.value} from index ${arrayIndex}`);
        return current.data.value;
      }
      current = current.next;
    }
    return null;
  }
}

module.exports = HashMap;
