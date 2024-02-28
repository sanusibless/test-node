//Stack 

class Node {
  constructor(elem) {
    this.elem = elem;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0
  }
  push(elem) {
    if(this.first == null) {
      this.first = new Node(elem);
      this.last = new Node(elem);
      this.size++
    } else {
      let newNode = new Node(elem);
      newNode.next = this.first;
      this.first = newNode;
      this.size++;
    }
  }
  pop() {
    if(this.first == null) return null;
    let temp = this.first;
    if(this.first === this.last) {
      this.last = null;
    }
    this.first = temp.next;
    this.size--;
    return temp;
  }
}