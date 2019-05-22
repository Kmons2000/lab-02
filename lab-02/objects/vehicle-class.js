'use strict';

class Vehicle {
  constructor(name, wheels) {
    this.name = name;
    this.wheels = wheels;
  }
  drive() {
    return 'moving forward';
  }
  stop() {
    return 'stopping';
  }
}

class Car extends Vehicle {
  constructor(name, wheels) {
    super(name, wheels);
  }
}

class Motorcycle extends Vehicle {
  constructor(name, wheels) {
    super(name, wheels);
  }
  wheelie() {
    return 'Wheee!';
  }
}

module.exports = {
  Car: Car,
  Motorcycle: Motorcycle,
};