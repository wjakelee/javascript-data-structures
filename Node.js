// node class used to create new nodes for a linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }

  // points the current node to a specifeid next node
  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error('Next node must be a member of the Node class')
    }
  }

  // points a specified previous node to the current node
  setPreviousNode(node) {
    if (node instanceof Node || node === null) {
      this.previous = node;
    } else {
      throw new Error('Previous node must be a member of the Node class')
    }
  }

  getNextNode() {
    return this.next;
  }

  getPreviousNode() {
    return this.previous;
  }
}

module.exports = Node;