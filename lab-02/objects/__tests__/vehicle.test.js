'use strict';

const VehicleConstructor = require('../vehicle-constructor.js');
const VehicleClass = require('../vehicle-class.js');
const VehicleFactory = require('../vehicle-factory.js');

describe('equal vs stricEqual', () => {
  var v1 = new VehicleConstructor.Car('hi', 4);
  var v2 = new VehicleClass.Car('hi', 4);
  var v3 = new VehicleClass.Car('hi', 4);

  it('thinks vehicles are equal', () => {
    expect(v1).toEqual(v2);
  });

  it('thinks vehicles from different constructors are not strictly equal', () => {
    expect(v1).not.toStrictEqual(v2);
  });

  it('thinks vehicles from same constructors are strictly equal', () => {
    expect(v3).toStrictEqual(v2);
  });
});

let types = ['Constructor', 'class', 'factory'];

describe('Vehicles', () => {

  describe('Car', () => {
    
    function getCar(type) {
      switch(type) {
      case 'Constructor':
        return new VehicleConstructor.Car('foo', 4);
      case 'class':
        return new VehicleClass.Car('foo', 4);
      case 'factory':
        return VehicleFactory.CarFactory('foo', 4);
      default:
        return {};
      }
    }
    
    types.forEach( type => {
      
      let car = getCar(type);

      it(`${type} (Car) has 4 wheels`, () => {
        expect(car.wheels).toEqual(4);
      });

      it(`${type} (Car) can drive`, () => {
        expect(car.drive()).toBeTruthy();
      });

      it(`${type} (Car) can stop`, () => {
        expect(car.stop()).toBeTruthy();
      });

      it(`${type} (Car) cannot do a wheelie`, () => {
        expect(car.wheelie).toBeUndefined();
      }); 
    });

  });

  describe(`Motorcycle`, () => {

    function getMotorcycle(type) {
      switch(type) {
      case 'Constructor':
        return new VehicleConstructor.Motorcycle('foo',2);
      case 'class':
        return new VehicleClass.Motorcycle('foo',2);
      case 'factory':
        return VehicleFactory.MotorcycleFactory('foo', 2);
      default:
        return {};
      }
    }

    types.forEach( type => {

      let motorcycle = getMotorcycle(type);

      it(`${type} (Motorcycle) has 2 wheels`, () => {
        expect(motorcycle.wheels).toEqual(2);
      });

      it(`${type} (Motorcycle) can drive`, () => {
        expect(motorcycle.drive()).toBeTruthy();
      });

      it(`${type} (Motorcycle) can stop`, () => {
        expect(motorcycle.stop()).toBeTruthy();
      });

      it(`${type} (Motorcycle) cannot do a wheelie`, () => {
        expect(motorcycle.wheelie()).toBeTruthy();
      });
      
    });

  });

});
