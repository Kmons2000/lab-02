
'use strict';

function VehicleFactory (name, wheels) {
  return {
    name,
    wheels,
    drive: () => {
      return 'Moving forward';
    },
    stop: () => {
      return 'Stopping';
    },
  };
}

function CarFactory(name, wheels) {
  let car = Object.assign (
    VehicleFactory(name, wheels)
  );
  return car;
}

function MotorcycleFactory(name, wheels) {
  let motorcycle = Object.assign (
    VehicleFactory(name, wheels)
  );
  motorcycle.wheelie = () => {
    return 'Wheee!';
  };
  return motorcycle;
}

module.exports = {
  CarFactory,
  MotorcycleFactory,
};