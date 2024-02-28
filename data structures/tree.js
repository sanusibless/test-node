class Node {
  constructor(data,left,right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
  show() {
    return this.data;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let newNode = new Node(data,null,null);
    if(this.root == null){
      this.root = newNode;
    } else {
        let currNode = this.root;
        let parent;
        while(true) {
          parent = currNode;
          if(data < currNode.data){
            currNode = currNode.left;
            if(currNode == null) {
              parent.left = newNode;
              break;
            }
          } else {
	        	currNode = currNode.right;
	            if(currNode == null) {
	              parent.right = newNode;
	              break;
	            }
            }
   	    }
    }
  }
  inOrder() {
    let node = this.root;
    order(node);
    function order(node) {
      if(!(node == null)) {
        order(node.left);
        console.log(node.show());
        order(node.right);
      }
    }
  }
  preOrder() {
    const order = (node) => {
      if(!(node == null)) {
        order(node.left);
        order(node.right);
        console.log(node.show());
      }
    }
    let node = this.root;
    order(node);
  }

  postOrder() {
    const order = (node) => {
      if(!(node == null)) {
        console.log(node.show());
        order(node.left);
        order(node.right);
      }
    }
	    let node = this.root;
	    order(node);
  	}

  min() {
    let node = this.root;
    while(!(node.left == null)) {
      node = node.left;
    }
    return node.data;
  }
  max() {
    let node = this.root;
    while(!(node.right == null)) {
      node = node.right;
    }
    return node.data;
  }
  find(data) {
    let currNode = this.root;
    while(currNode.data != data) {
      if(currNode == null) {
        return null
      }

      if(data<currNode.data) {
        currNode = currNode.left;
      } else {
        currNode = currNode.right;
      }
    }
    return currNode;
  }
  remove(data) {
    let root = this.removeNode(this.root,data);
  }
  removeNode(node,data) {

    if(node == null) {
      return null;
    }
    if(data == node.data) {
      if(node.left == null && node.right == null) {
        return null;
      }
      if(node.left == null) {
        return node.right;
      } 
      if(node.right == null) {
        return node.left;
      } 

      let tempNode = getSmallest(node.right);
      node.data = tempNode.data;
      node.right = this.removeNode(node.right,tempNode.data);
      return node;
    }
    else if(data < node.data) {
      node.left = this.removeNode(node.left,data);
      return node;
    } 
    else {
      node.right = this.removeNode(node.right,data);
      return node;
    }


   function getSmallest(node) {
      if(node.left == null) return node.right;
      if(node.right == null) return node.left;
      if(node.left.data < node.right.data) {
        return node.left;
      }
      return node.right;
    }
  }
}