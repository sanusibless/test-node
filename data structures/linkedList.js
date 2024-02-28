class Node {
  constructor(data) {
      this.data = data
      this.next = null
  }
}


class LinkedList {

  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head === null
  }

  size() {
    /*
      This takes a linear time operation ( O(n) )
    */
    let  current = this.head;
    let count = 0;

    while(current) {
      count+=1;
      current = current.next;
    }
    return count;
  }

  add(data){
    // this operation takes linear time ( O(n))
    let newNode = new Node(data);
    if(this.isEmpty()) this.head = newNode
    else {
      let currNode = this.head;
      while(currNode.next) {
        currNode = currNode.next
      }
      currNode.next = newNode;
    }
  }


  toString() {
    let string = "";
    let currNode = this.head;
    while(currNode) {
      string += `${currNode.data} -> `;
      if(currNode.next == null) {
        string += "null";
      } 
      currNode = currNode.next;
    }
    console.log(string);
  }

  search (key) {
    // This runs in O(n) time
    let currNode = this.head;

    while(currNode) {

      if(currNode.data == key) {
        return console.log(currNode);
      } else {
        currNode = currNode.next
      }

    }

    console.log(null);
  }

  insert(data, index) {
    let newNode = new Node(data);
    if(index == 0) {
      let currNode = this.head;
      this.head = newNode;
      this.head.next = currNode; 
     } else {
      let currNode = this.head;
      let position = index;
      while(position  > 1) {
        currNode = currNode.next;
        position--
      }
      let prev = currNode;
      let next = currNode.next;
      newNode.next = next;
      prev.next = newNode;
     }
  }
}

let ll = new LinkedList();
ll.add(30);
ll.add(10);
ll.add(16);
ll.add(14);
ll.add(10);
ll.add(12);
ll.insert(11,2);
ll.toString();
