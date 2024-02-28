class Queue{
  constructor() {
    this.data = [];
  }
  dequeue() {
    return this.data.splice(0,1);
  }
  // Priorty Dequeue
  dequeue() {
      let priority = this.data[0].code;
      for(let i = 0;i < this.datat.length;i++) {
        if(priority<this.data[i]) {
          priority = i;
        }
      }
      return this.data.splice(priority,1);
    }
  
  enqueue(element) {
    if(element instanceof Array) {
      this.data = [...element];
    } else {
      this.data[this.data.length] = element;
    }
  }
  front() {
    return this.data[0];
  }
  back() {
    return this.data[this.data.length - 1];
  }
  empty() {
   return this.data.length == 0 ? true :false;
  }
  toString() {
    console.log(this.data);
  }
}