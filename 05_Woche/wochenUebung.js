"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    constructor(pricePerMinute, priceToUnlock, distanceTravelled, name, id, taken) {
        this.pricePerMinute = pricePerMinute;
        this.priceToUnlock = priceToUnlock;
        this.distanceTravelled = distanceTravelled;
        this.name = name;
        this.id = id;
        this.taken = taken;
    }
    getPricePerMinute() {
        return this.pricePerMinute;
    }
    getPriceToUnlock() {
        return this.priceToUnlock;
    }
    getDistanceTravelled() {
        return this.distanceTravelled;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    gettaken() {
        return this.taken;
    }
    setPricePerMinute(pricePerMinute) {
        this.pricePerMinute = pricePerMinute;
    }
    //void weil, hier wird nichts zurückgegeben, es gibt keinen Rückgabewert. Void müsste ich hier nicht hinschreiben, TS trägt das sonst auch selber intern nach. 
    setPriceToUnlock(priceToUnlock) {
        this.priceToUnlock = priceToUnlock;
    }
    setName(name) {
        this.name = name;
    }
    updateDistance(distance) {
        this.distanceTravelled += distance;
        //addiert die distanceTravelled mit dem Wert distance 
        return this.distanceTravelled;
        //durch den return muss oben updateDistance: number stehen, void wäre dann falsch, da wir mit dem Return ja einen Rückgabewert festlegen und der ist hier eine Zahl. 
    }
    isAvailable() {
        return !this.taken;
        //bedeutet: gibt zurück das Gegenteil von dem aktuellen Boolean hinter taken. 
    }
}
const car = new Vehicle(10, 5, 20, "mein Auto", 1, false);
//Der Constructor ist in der Klammer und wird mit new aufgerufen
// console.log(car.priceToUnlock)
// console.log(car.getPricePerMinute())
console.log(car.getDistanceTravelled());
car.updateDistance(20);
console.log(car.getDistanceTravelled());
//Aufgabe 5 - Donnerstagsaufgaben
class Car extends Vehicle {
    constructor(pricePerMinute, priceToUnlock, distanceTravelled, brand, id, taken = true, fuelPercentage, kilometerLeft) {
        super(pricePerMinute, priceToUnlock, distanceTravelled, brand, id, taken);
        this.brand = brand;
        this.fuelPercentage = fuelPercentage;
        this.kilometerLeft = kilometerLeft;
    }
    isTaken() {
        return this.taken;
    }
    getFuelStatus() {
        if (this.fuelPercentage <= 20) {
            return 'fast leer';
        }
        if (this.fuelPercentage >= 80) {
            return ' fast voll';
        }
        else {
            return 'Tankstand mittel';
        }
    }
}
const myCar = new Car(0.5, 10, 100, "BMW", 1, false, 50, 300);
myCar.fuelPercentage = 40;
console.log(myCar.getFuelStatus());
class Scooter extends Vehicle {
    constructor(pricePerMinute, priceToUnlock, distanceTravelled, id, brand, taken = true, kilometerLeft) {
        super(pricePerMinute, priceToUnlock, distanceTravelled, brand, id, taken);
        this.brand = brand;
        this.kilometerLeft = kilometerLeft;
    }
    isTaken() {
        return this.taken;
    }
}
class Bike extends Vehicle {
    isTaken() {
        return this.taken;
    }
}
function isAvailable(vehicle) {
    if (vehicle instanceof Bike) {
        return !vehicle.isTaken();
    }
    else if (vehicle instanceof Scooter) {
        return !vehicle.isTaken() && vehicle.batteryPercentage >= 10;
    }
    else if (vehicle instanceof Car) {
        return !vehicle.isTaken() && vehicle.fuelPercentage >= 15;
    }
    else {
        throw new Error('Unrecognized vehicle type');
    }
}
console.log(isAvailable(myCar));
//vehicle: 
//private pricePerMinute: number;
// private priceToUnlock: number;
// private distanceTravelled: number;
// private name: string;
// private id: number;
// protected taken: boolean;
//scooter
// batteryPercentage: number;
// kilometerLeft: number;
// brand: string;
//car 
//     fuelPercentage: number;
// kilometerLeft: number;
// brand: string;
function getAvailableVehicle() {
    const vehicles = [
        new Car(0.5, 10, 100, "BMW", 2, true, 50, 300),
        new Car(0.5, 10, 100, "BMW", 3, false, 50, 300),
        new Scooter(0.5, 10, 100, 1, "Floppy", true, 80),
        new Scooter(0.5, 10, 100, 2, "Floppy", false, 20),
        new Bike(0.5, 10, 100, "Vespa", 1, true),
        new Bike(0.5, 10, 100, "Vespa", 2, false)
    ];
    const availableVehicles = [];
    for (const vehicle of vehicles) {
        if (isAvailable(vehicle)) {
            availableVehicles.push(vehicle);
        }
    }
    return availableVehicles;
}
console.log(getAvailableVehicle());
//# sourceMappingURL=wochenUebung.js.map