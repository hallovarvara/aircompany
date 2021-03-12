const PassengerPlane = require('./Planes/PassengerPlane');
const ExperimentalPlane = require('./Planes/ExperimentalPlane');
const MilitaryType = require('./models/militaryType');

class Airport {
    constructor(planes) {
        this.planes = planes;
    }

    getPassengerPlanes() {
        return this.planes.filter((plane) => plane instanceof PassengerPlane);
    }

    getMilitaryPlanes() {
        return this.planes.filter((plane) => Object.values(MilitaryType).includes(plane.getType()));
    }

    getExperimentalPlanes() {
        return this.planes.filter((plane) => plane instanceof ExperimentalPlane);
    }

    getPassengerPlaneWithMaxPassengersCapacity() {
        return this.getPassengerPlanes().sort(
          (a, b) => b.getPassengersCapacity() > a.getPassengersCapacity() ? 1 : -1
        )[0];
    }

    getTransportMilitaryPlanes(){
        return this.getMilitaryPlanes()
          .filter((plane) => plane.getType() === MilitaryType.TYPE_TRANSPORT);
    }

    getBomberMilitaryPlanes() {
        return this.getMilitaryPlanes()
          .filter((plane) => plane.getType() === MilitaryType.TYPE_BOMBER);
    }

    getSortedByMaxDistance() {
        return [...this.planes].sort((a, b) => (b.getMaxFlightDistance() > a.getMaxFlightDistance()) ? 1 : -1);
    }

    getSortedByMaxSpeed() {
        return [...this.planes].sort((a, b) => (b.getMaxSpeed() > a.getMaxSpeed()) ? 1 : -1);
    }

    getSortedByMaxLoadCapacity() {
        return [...this.planes].sort((a, b) => (b.getMaxLoadCapacity() > a.getMaxLoadCapacity()) ? 1 : -1);
    }

    getPlanes() {
        return this.planes;
    }

    static printPlanes(planes) {
        return JSON.stringify(planes);
    }
}

module.exports = Airport;
