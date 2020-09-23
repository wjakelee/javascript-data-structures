const Node = require('./Node');

/*
STILL NEED TO ADD:
addToList --- adds node to any location
updateData   ---   updates a node
*/

//class is used to create a Doubly Linked List, used as the underlying structure for other data structures
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  //adds node to the head of the list
  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    if (currentHead) {
      currentHead.setPreviousNode(newHead);
      newHead.setNextNode(currentHead);
    }
    this.head = newHead;
    if (!this.tail) {
      this.tail = newHead;
    }
  }

  // adds node to the tail of the list
  addToTail(data) {
    const newTail = new Node(data);
    const currentTail = this.tail;
    if (currentTail) {
      currentTail.setNextNode(newTail);
      newTail.setPreviousNode(currentTail);
    }
    this.tail = newTail;
    if (!this.head) {
      this.head = newTail;
    }
  }

  //removes node from the head of the list
  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    this.head = removedHead.getNextNode();
    if (this.head) {
      this.head.setPreviousNode(null);
    }
    if (removedHead === this.tail) {
      this.removeTail();
    }
    return removedHead.data;
  }

  // removes node from the tail of the list
  removeTail() {
    const removedTail = this.tail;
    if (!removedTail) {
      return;
    }
    this.tail = removedTail.getPreviousNode();
    if (this.tail) {
      this.tail.setNextNode(null);
    }
    if (removedTail === this.head) {
      this.removeHead();
    }
    return removedTail.data;
  }

  // this method currently only works with singly linked list
  
  // swapNodes(data1, data2) {
  //   let node1 = this.head;
  //   let node2 = this.head;
  //   let node1Prev = null;
  //   let node2Prev = null;
    
  //   if (data1 === data2) {
  //     console.log('Elements are the same - no swap needed.');
  //     return;
  //   }

  //   while (node1 !== null) {
  //     if (node1.data === data1) {
  //       break;
  //     }
  //     node1Prev = node1;
  //     node1 = node1.getNextNode();
  //   }

  //   while (node2 !== null) {
  //     if (node2.data === data2) {
  //       break;
  //     }
  //     node2Prev = node2;
  //     node2 = node2.getNextNode();
  //   }

  //   if (node1 === null || node2 === null) {
  //     console.log('Swap not possible - one or more element is not in the list')
  //     return;
  //   }

  //   if (node1Prev === null) {
  //     this.head = node2;
  //   } else {
  //     node1Prev.setNextNode(node2);
  //   }

  //   if (node2Prev === null) {
  //     this.head = node1;
  //   } else {
  //     node2Prev.setNextNode(node1);
  //   }

  //   let temp = node1.getNextNode();
  //   node1.setNextNode(node2.getNextNode());
  //   node2.setNextNode(temp); 

  // }

  // removes specific node from list by specified data
  removeByData(data) {
    let nodeToRemove;
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.data === data) {
        nodeToRemove = currentNode;
        break;
      }
      currentNode = currentNode.getNextNode();
    }
    if (!nodeToRemove) {
      return null;
    }
    if (nodeToRemove === this.head) {
      this.removeHead();
    } else if (nodeToRemove === this.tail) {
      this.removeTail();
    } else {
      const nextNode = nodeToRemove.getNextNode();
      const previousNode = nodeToRemove.getPreviousNode();
      nextNode.setPreviousNode(previousNode);
      previousNode.setNextNode(nextNode);
    }
    return nodeToRemove;
  }

  //prints the entire list to the console
  printList() {
    let currentNode = this.head;
    let output = '<head> ';
    while (currentNode !== null) {
      output += currentNode.data + ' ';
      currentNode = currentNode.getNextNode();
    }
    output += '<tail>';
    console.log(output);
  }
}

module.exports = DoublyLinkedList;