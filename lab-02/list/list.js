'use strict';

class List {

  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * Add item to the end of the list
   * @param item
   */
  push(item) {
    // Add an item to the end
    this.data[this.length] = item;
    this.length++;
  }

  /**
   * // Remove an item from the end of the list and return it's value
   * @returns {*}
   */
  pop() {
    if (this.length === 0)
    {
      return null;
    }

    let returnValue = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return returnValue;
  }

  shift() {
    let returnValue = this.data[0];
    delete this.data[0];
    this.length--;
    return returnValue;
  }

  unshift() {
    let items = arguments;
    for(let i = 0; i < arguments.length; i++) {
      this.length++;
      for(let i = this.length -1; i >= 0; i--) {
        this.data[i + 1] = this.data[i];
      }
      this.data[0] = items[i];
    }
  }

  forEach(callback) {
    for(let i = 0; i < this.length; i++) {
      callback(this.data[i]);
    }
  }

}

module.exports = List;
