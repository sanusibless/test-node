// doubly linked list
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
  }
}

class DLList {
  constructor(element) {
    this.head = new Node('Head');
  }
  find(item) {
    let currNode = this.head;
    while(currNode.element != item) {
      currNode = currNode.next;
    }
    return currNode;
  }
  findLast() {
    let currNode = this.head;
    while(!(currNode.next == null)) {
      currNode = currNode.next;
    }
    return currNode;
  }
  insert(item,after) {
    let currNode = this.find(after);
    let newNode = new Node(item);
    newNode.next = currNode.next;
    newNode.previous = currNode;
    currNode.next = newNode;
  }
  remove(item) {
    let currNode = this.find(item);
    if(!(currNode.next == null)){
      currNode.previous.next = currNode.next;
      currNode.next.previous = currNode.previous;
      currNode.next = null;
      currNode.previous = null;
    } else {
      currNode.previous.next = null;
      currNode.next = null;
      currNode.previous = null;
    }
  }

  display() {
    let currNode = this.head;
    while(!(currNode.next == null)) {
      console.log(currNode.next.element);
      currNode = currNode.next;
    }
  }
  dispReverse() {
    let  currNode = this.findLast();
    while(!(currNode.previous == null)) {
      console.log(currNode.element);
      currNode = currNode.previous;
    }
  }
}