'use strict';

function List() {
  this.length = 0;
  this.data = {};
}
/**
 * Add item to the end of the list
 * @param item
 */
List.prototype.push = function(item) {
  this.data[this.length] = item;
  this.length++;
};

/**
 * // Remove an item from the end of the list and return it's value
 * @returns {*}
 */
List.prototype.pop = function() {
  let returnValue = this.data[this.length-1];
  delete this.data[this.length-1];
  this.length--;
  return returnValue;
};

List.prototype.shift = function() {
  let returnValue = this.data[0];
  delete this.data[0];
  this.length--;
  return returnValue;
};

List.prototype.unshift = function() {
  let items = arguments;
  for(let i = 0; i < arguments.length; i++) {
    this.length++;
    for(let i = this.length -1; i >= 0; i--) {
      this.data[i + 1] = this.data[i];
    }
    this.data[0] = items[i];
  }
};

List.prototype.forEach = function(callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

module.exports = List;
