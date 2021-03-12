const Airport = require('./Airport');
const { MOCKED_PLANES } = require('./mocks/planes.mock');
const { printPlanes } = Airport;

const airport = new Airport(MOCKED_PLANES);
const militaryAirport = new Airport(airport.getMilitaryPlanes());
const passengerAirport = new Airport(airport.getPassengerPlanes());

console.log(`Military airport sorted by max distance: ${printPlanes(militaryAirport.getSortedByMaxDistance())}`);
console.log(`Passenger airport sorted by max speed: ${printPlanes(passengerAirport.getSortedByMaxSpeed())}`);
console.log(`Plane with max passenger capacity: ${printPlanes(passengerAirport.getPassengerPlaneWithMaxPassengersCapacity())}`);
