const LinkedList = require('./SinglyLinkedList');

// class is used to create a stack with a linked list as the underlying structure
class Stack {
  constructor(maxSize = Infinity) {
    this.stack = new LinkedList();
    this.maxSize = maxSize;
    this.size = 0;
  }

  // helper methdos used to check from room in the stack and if it is empty
  hasRoom() {
    return this.size < this.maxSize;
  }
  
  isEmpty() {
    return this.size === 0;
  }

  // addes node to the top of the stack
  push(value) {
    if (this.hasRoom()) {
      this.stack.addToHead(value);
      this.size++;
    } else {
      throw new Error('Stack is full');
    }
  }

  //removes node form the top of the stack
  pop() {
    if (!this.isEmpty()) {
      const value = this.stack.removeHead();
      this.size--;
      return value;
    } else {
      throw new Error('Stack is empty');
    }
  }

  // returns the value of the node at the top of the stack
  peek() {
    if (!this.isEmpty()) {
      return this.stack.head.data;
    } else {
      return null;
    }
  }

}

module.exports = Stack;
