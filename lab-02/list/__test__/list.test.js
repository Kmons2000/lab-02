'use strict';

// These 2 should be interchangeable!
const List = require('../list.js');
//const List = require('../list-constructor.js');

describe('List Data Structure', () => {

  it('starts with a length of -1 and an empty data set', () => {
    let stuff = new List();
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

  it('Remove an item from the end of the list and return its value', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.pop()).toEqual('b');
    expect(stuff.length).toEqual(1);    
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
  expect(stuff.data[0]).toEqual('d')
  expect(stuff.data[1]).toEqual('c')
});

it('loops over every item', () => {
  let stuff = new List();
  let count = 0;
  stuff.push('a');
  stuff.push('b');
  stuff.push('c');
  stuff.push('d');
  stuff.push('e');
  stuff.forEach(function() {
    count++;
  });
  expect(count).toBe(5)
})

});
