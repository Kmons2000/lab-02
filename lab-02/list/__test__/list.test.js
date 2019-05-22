'use strict';

// These 2 should be interchangeable!
const List = require('../list.js');
//const List = require('../list-constructor.js');

describe('List Data Structure', () => {

  it('starts with a length of 0 and an empty data set', () => {
    // Arrange
    let stuff = new List();
    
    // Act
    // do nothing - leave it empty!

    // Assert
    expect(stuff.length).toEqual(0);
    expect(stuff.data).toEqual({});
  });

  it('pushes items to the end of the data set', () => {
    let stuff = new List();

    stuff.push('a');
    stuff.push('b');

    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('b');
  });

  describe('Pop', () => {
    it('Does not change list.length when empty', () => {
      // Arrange
      let list = new List();
      expect(list.length).toBe(0);

      // Act
      list.pop();

      // Assert
      expect(list.length).toBe(0);
    });

    it('Returns null for empty list', () => {
      // Arrange
      let list = new List();
      expect(list.length).toBe(0);

      // Act
      let popResult = list.pop();

      // Assert
      expect(popResult).toBeNull();
    });

    it('Remove an item from the end of the list and return its value', () => {
      let stuff = new List();
      stuff.push('a');
      stuff.push('b');
      expect(stuff.pop()).toEqual('b');
      expect(stuff.length).toEqual(1);    
    });
  });

  it('Remove an item from the start of the list and return its value', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');  
    expect(stuff.shift()).toEqual('a');
    expect(stuff.length).toEqual(1);

  });

  it('pushes items to the start of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.unshift('c', 'd');
    expect(stuff.length).toEqual(4);
    expect(stuff.data[0]).toEqual('d');
    expect(stuff.data[1]).toEqual('c');
  });

  describe('forEach', () => {

    it('loops over every item', () => {
    // Arrange
      let stuff = new List();
      let count = 0;
      stuff.push('a');
      stuff.push('b');
      stuff.push('c');
      stuff.push('d');
      stuff.push('e');

      // Act
      stuff.forEach(function() {
        count++;
      });

      // Assert
      expect(count).toBe(5);
    });

    it('calls callback with each item', () => {
    // Arrange
      let stuff = new List();
      stuff.push('a');
      stuff.push('b');
      stuff.push('c');
      stuff.push('d');
      stuff.push('e');

      let eachValue = [];

      // Act
      stuff.forEach(function(item) {
        eachValue.push(item);
      });

      // Assert
      expect(eachValue.length).toBe(5);
      expect(eachValue).toStrictEqual(['a','b','c','d','e']);
    });
  });

});
