class Plane {
    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity, type) {
        this.model = model;
        this.maxSpeed = maxSpeed;
        this.maxFlightDistance = maxFlightDistance;
        this.maxLoadCapacity = maxLoadCapacity;
        this.type = type;
    }

    getMaxSpeed() {
        return this.maxSpeed;
    }

    getMaxFlightDistance() {
        return this.maxFlightDistance;
    }

    getMaxLoadCapacity() {
        return this.maxLoadCapacity;
    }

    getType() {
        return this.type;
    }
}

module.exports = Plane;
