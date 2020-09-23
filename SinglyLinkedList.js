const Node = require('./Node');

// class used to create singly linked list
class LinkedList {
  constructor() {
    this.head = null;
  }

  //adds node to head of the list
  addToHead(data) {
    const nextNode = new Node(data);
    const currentHead = this.head;
    this.head = nextNode;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

    //add node to tail of the list
  addToTail(data) {
    let lastNode = this.head;
    if (!lastNode) {
      this.head = new Node(data);
    } else {
      let temp = this.head;
      while (temp.getNextNode() !== null) {
        temp = temp.getNextNode();
      }
      temp.setNextNode(new Node(data));
    }
  }

  // removes the head node form the list
  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    if (removedHead.next) {
      this.head = removedHead.next;
    }
    return removedHead.data;
  }

  // prints the entire list
  printList() {
    let currentNode = this.head;
    let output = '<head> ';
    while (currentNode !== null) {
      output += currentNode.data + ' ';
      currentNode = currentNode.next;
    }
    output = output.concat("<tail>");
    console.log(output);
  }

  //finds a node in the list iteratively
  findNodeIteratively(data) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.data === data) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  //finds a node in the list using recursion
  findNodeRecursively(data, currentNode = this.head) {
    if (currentNode === null) {
      return null;
    } else if (currentNode.data === data) {
      return currentNode;
    } else {
      return this.findNodeRecursively(data, currentNode.next);
    }
  }

  //swaps the position of two selected nodes based on data
  swapNodes(data1, data2) {
    let node1 = this.head;
    let node2 = this.head;
    let node1Prev = null;
    let node2Prev = null;
    
    //checks if the input data is the same
    if (data1 === data2) {
      console.log('Elements are the same - no swap needed.');
      return;
    }

    //used to determine the previous node before the desired node with data1
    while (node1 !== null) {
      if (node1.data === data1) {   //breaks loop once node with data1 is found
        break;
      }
      node1Prev = node1;
      node1 = node1.getNextNode();
    }

    //used to determine the previous node before the desired node with data2
    while (node2 !== null) {
      if (node2.data === data2) {    //breaks loop once node with data2 is found
        break;
      }
      node2Prev = node2;
      node2 = node2.getNextNode();
    }

    //checks if neither of the selected nodes are in the list
    if (node1 === null || node2 === null) {
      console.log('Swap not possible - one or more element is not in the list')
      return;
    }

    // checks if node1 is head of the list
    if (node1Prev === null) {
      this.head = node2;
    } else {
      node1Prev.setNextNode(node2);
    }

    //checks if node2 is the head of the list
    if (node2Prev === null) {
      this.head = node1;
    } else {
      node2Prev.setNextNode(node1);
    }

    //finishes the swap
    let temp = node1.getNextNode();
    node1.setNextNode(node2.getNextNode()); 
    node2.setNextNode(temp); 

  }
}

module.exports = LinkedList;