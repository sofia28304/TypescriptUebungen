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
//# sourceMappingURL=dienstagsUebung.js.map