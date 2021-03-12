const Plane = require('../Planes/Plane');
const PassengerPlane = require('../Planes/PassengerPlane');
const ExperimentalPlane = require('../Planes/ExperimentalPlane');

const MilitaryType = require('../models/militaryType');
const ExperimentalType = require('../models/experimentalType');
const ClassificationLevel = require('../models/classificationLevel');

const MOCK_MAX_PASSENGERS = 242;

const MOCKED_PLANES = [
  new PassengerPlane('Boeing-737', 900, 12000, 60500, 164),
  new PassengerPlane('Boeing-737-800', 940, 12300, 63870, 192),
  new PassengerPlane('Boeing-747', 980, 16100, 70500, MOCK_MAX_PASSENGERS),
  new PassengerPlane('Airbus A320', 930, 11800, 65500, 188),
  new PassengerPlane('Airbus A330', 990, 14800, 80500, 222),
  new PassengerPlane('Embraer 190', 870, 8100, 30800, 64),
  new PassengerPlane('Sukhoi Superjet 100', 870, 11500, 50500, 140),
  new PassengerPlane('Bombardier CS300', 920, 11000, 60700, 196),
  new Plane('B-1B Lancer', 1050, 21000, 80000, MilitaryType.TYPE_BOMBER),
  new Plane('B-2 Spirit', 1030, 22000, 70000, MilitaryType.TYPE_BOMBER),
  new Plane('B-52 Stratofortress', 1000, 20000, 80000, MilitaryType.TYPE_BOMBER),
  new Plane('F-15', 1500, 12000, 10000, MilitaryType.TYPE_FIGHTER),
  new Plane('F-22', 1550, 13000, 11000, MilitaryType.TYPE_FIGHTER),
  new Plane('C-130 Hercules', 650, 5000, 110000, MilitaryType.TYPE_TRANSPORT),
  new ExperimentalPlane("Bell X-14", 277, 482, 500, ExperimentalType.HIGH_ALTITUDE, ClassificationLevel.SECRET),
  new ExperimentalPlane("Ryan X-13 Vertijet", 560, 307, 500, ExperimentalType.VTOL, ClassificationLevel.TOP_SECRET)
];

module.exports = {
  MOCKED_PLANES,
  MOCK_MAX_PASSENGERS,
};
