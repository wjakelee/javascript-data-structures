const LinkedList = require("./DoublyLinkedList");

// class Queue used to create a queue with an underlying linked list data structure
class Queue {
  constructor(maxSize = Infinity) {
    this.queue = new LinkedList();
    this.maxSize = maxSize;
    this.size = 0;
  }

  // checks if queue is empty
  isEmpty() {
    return this.size === 0;
  }

  //checks if queue has room
  hasRoom() {
    return this.size < this.maxSize;
  }

  //adds data to the end of the queue
  enqueue(data) {
    if (this.hasRoom()) {
      this.queue.addToTail(data);
      this.size++;
      console.log(`Added ${data} to queue! Queue size is now ${this.size}.`);
    } else {
      throw new Error("Queue is full!");
    }
  }

  // removes data from the front of the queue
  dequeue() {
    if (!this.isEmpty()) {
      const data = this.queue.removeHead();
      this.size--;
      console.log(`Removed ${data} from queue! Queue size is now ${this.size}.`);
      return data;
    } else {
      throw new Error("Queue is empty!");
    }
  }
}

module.exports = Queue;