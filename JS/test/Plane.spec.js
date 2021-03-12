const { assert } = require('chai');
const Airport = require('../Airport');
const Plane = require('../Planes/Plane');
const { MOCKED_PLANES } = require('../mocks/planes.mock');

describe('Plane test', () => {
  const airport = new Airport(MOCKED_PLANES);
  const planes = airport.getPlanes();

  it('should check max speed has correct type', () => {
    let someHasNoSpeedNumber = false;

    for (let i = 0; i < planes.length; i++) {
      if (typeof planes[i].getMaxSpeed() !== 'number') {
        someHasNoSpeedNumber = true;
        break;
      }
    }

    assert.isFalse(someHasNoSpeedNumber);
  });

  it('should check max flight distance has correct type', () => {
    let someHasNoSpeedNumber = false;

    for (let i = 0; i < planes.length; i++) {
      if (typeof planes[i].getMaxFlightDistance() !== 'number') {
        someHasNoSpeedNumber = true;
        break;
      }
    }

    assert.isFalse(someHasNoSpeedNumber);
  });
});
