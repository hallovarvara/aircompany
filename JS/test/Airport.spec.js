const { assert } = require('chai');
const Airport = require('../Airport');
const Plane = require('../Planes/Plane');
const PassengerPlane = require('../Planes/PassengerPlane');
const MilitaryType = require('../models/militaryType');
const ClassificationLevel = require('../models/classificationLevel');
const { MOCKED_PLANES, MOCK_MAX_PASSENGERS } = require('../mocks/planes.mock');

describe('Airport test', () => {
    const airport = new Airport(MOCKED_PLANES);

    const checkSortingWork = (sortedPlanes, getParameterMethod) => {
        let isOrderCorrect = true;

        for (let i = 0; i < sortedPlanes.length - 1; i++) {
            if (sortedPlanes[i][getParameterMethod]() < sortedPlanes[i + 1][getParameterMethod]()) {
                isOrderCorrect = false;
                break;
            }
        }

        assert.isTrue(isOrderCorrect);
    };

    it('should have military planes with transport type', () => {
        let transportMilitaryPlanes = airport.getTransportMilitaryPlanes();
        let hasMilitaryPlanes = false;

        for (let i = 0; i < transportMilitaryPlanes.length; i++) {
            if (transportMilitaryPlanes[i].getType() === MilitaryType.TYPE_TRANSPORT) {
                hasMilitaryPlanes = true;
                break;
            }
        }

        assert.equal(hasMilitaryPlanes,true);
    });

    it('should check passenger plane with max capacity', () => {
        const planeWithMaxCapacity = new PassengerPlane('Boeing-747', 980, 16100, 70500, MOCK_MAX_PASSENGERS);
        const planeWithMaxCapacityFromAirport = airport.getPassengerPlaneWithMaxPassengersCapacity();
        assert.isTrue( planeWithMaxCapacity.getPassengersCapacity() === planeWithMaxCapacityFromAirport.getPassengersCapacity());
    });


    it('should check sorting by load capacity work', () => {
        checkSortingWork(airport.getSortedByMaxLoadCapacity(), 'getMaxLoadCapacity');
    })

    it('should check sorting by max distance work', () => {
        checkSortingWork(airport.getSortedByMaxDistance(), 'getMaxFlightDistance');
    })

    it('should check sorting by max speed work', () => {
        checkSortingWork(airport.getSortedByMaxSpeed(), 'getMaxSpeed');
    })

    it('should check if there is at least one bomber military plane', () => {
        const bomberMilitaryPlanes = airport.getBomberMilitaryPlanes();
        let arePlanesBombers = true;

        for (let i = 0; i < bomberMilitaryPlanes.length; i++) {
            if (bomberMilitaryPlanes[i].getType() !== MilitaryType.TYPE_BOMBER) {
                arePlanesBombers = false;
                break;
            }
        }

        assert.isTrue(arePlanesBombers);
    })

    it('should check that experimental planes has classification level higher than unclassified', () => {
        let experimentalPlanes = airport.getExperimentalPlanes();
        let hasUnclassifiedPlanes = false;

        for (let i = 0; i < experimentalPlanes.length; i++) {
            if (experimentalPlanes[i].getClassificationLevel() === ClassificationLevel.UNCLASSIFIED) {
                hasUnclassifiedPlanes = true;
                break;
            }
        }

        assert.isFalse(hasUnclassifiedPlanes);
    });

    it('should be able to stringify planes', () => {
        const reference = JSON.stringify(airport.getPlanes());
        const stringifiedPlanes = Airport.printPlanes(airport.getPlanes());
        assert.isTrue(reference === stringifiedPlanes);
    });
});
