class Dictionary {

  constructor(){
    this.data = [];
  }

  add(key,value){
    this.data[key] = value;
  }

  find(key){
    return this.data[key];
  }

  remove(key) {
    delete this.data[key];
  }

  showAll() {
    for(const [key,value] of Object.entries(this.data).sort()){
      console.log(key + " -> " + value);
    }
  }

  count() {
    console.log(Object.keys(this.data).length);
  }

  clear() {
    this.data = [];
    return true;
  }

}
