class Vehicle {
    private pricePerMinute: number;
    private priceToUnlock: number;
    private distanceTravelled: number;
    private name: string;
    private id: number;
    protected taken: boolean;

    constructor(
        pricePerMinute: number,
    priceToUnlock: number,
        distanceTravelled: number,
        name: string,
            id: number,
            taken: boolean){
this.pricePerMinute = pricePerMinute
this.priceToUnlock = priceToUnlock
this.distanceTravelled = distanceTravelled
this.name = name
this.id = id
this.taken= taken
        }
        getPricePerMinute(): number{
            return this.pricePerMinute
        }
        getPriceToUnlock(): number{
            return this.priceToUnlock
        }
        getDistanceTravelled():number{
            return this.distanceTravelled
        }
        getName():string{
            return this.name
        }
        getId():number{
            return this.id
        }
        gettaken():boolean{
            return this.taken
        }
        setPricePerMinute(pricePerMinute: number): void {
            this.pricePerMinute = pricePerMinute;
        }
        //void weil, hier wird nichts zurückgegeben, es gibt keinen Rückgabewert. Void müsste ich hier nicht hinschreiben, TS trägt das sonst auch selber intern nach. 
        setPriceToUnlock(priceToUnlock:number) {
            this.priceToUnlock = priceToUnlock
        }
        setName(name: string) {
            this.name = name
        }
        updateDistance(distance:number): number {
this.distanceTravelled += distance
//addiert die distanceTravelled mit dem Wert distance 
return this.distanceTravelled
//durch den return muss oben updateDistance: number stehen, void wäre dann falsch, da wir mit dem Return ja einen Rückgabewert festlegen und der ist hier eine Zahl. 
        }
        isAvailable(): boolean{
            return !this.taken
            //bedeutet: gibt zurück das Gegenteil von dem aktuellen Boolean hinter taken. 
        }
}

const car = new Vehicle(10,5,20,"mein Auto",1,false)
//Der Constructor ist in der Klammer und wird mit new aufgerufen
// console.log(car.priceToUnlock)
// console.log(car.getPricePerMinute())
console.log(car.getDistanceTravelled())
car.updateDistance(20)
console.log(car.getDistanceTravelled())

//Aufgabe 5 - Donnerstagsaufgaben

class Car extends Vehicle {
fuelPercentage: number;
kilometerLeft: number;
brand: string;

constructor(pricePerMinute: number, priceToUnlock: number, distanceTravelled: number, brand: string, id: number, taken: boolean = true, fuelPercentage: number, kilometerLeft: number) {
    super(pricePerMinute, priceToUnlock, distanceTravelled, brand, id, taken);
    this.brand = brand;
    this.fuelPercentage = fuelPercentage;
    this.kilometerLeft = kilometerLeft;
}

isTaken(): boolean {
    return this.taken;
}
getFuelStatus(): string {
    if ( this.fuelPercentage <= 20) {
        return 'fast leer'
    }
    if ( this.fuelPercentage >= 80) {
        return ' fast voll'
    }
    else {
        return 'Tankstand mittel'
    }
}
}
const myCar = new Car(0.5, 10, 100, "BMW", 1, false, 50, 300);
myCar.fuelPercentage = 40;
console.log(myCar.getFuelStatus());


class Scooter extends Vehicle {
    batteryPercentage: number;
    kilometerLeft: number;
    brand: string;
  
    constructor(pricePerMinute: number, priceToUnlock: number, distanceTravelled: number, id: number, brand: string, taken: boolean = true, kilometerLeft: number) {
        super(pricePerMinute, priceToUnlock, distanceTravelled, brand, id, taken);
        this.brand = brand;
        this.kilometerLeft = kilometerLeft;
    }
  
    isTaken(): boolean {
      return this.taken;
    }
  }

class Bike extends Vehicle {
brand: string;
frameNumber: number

isTaken(): boolean {
    return this.taken;
}
}

function isAvailable(vehicle: Vehicle): boolean {
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
    // fuelPercentage: number;
    // kilometerLeft: number;
    // brand: string;

function getAvailableVehicle(): Vehicle[] {
    const vehicles: Vehicle[] = [
      new Car(0.5, 10, 100, "BMW", 2, true, 50, 300),
      new Car(0.5, 10, 100, "BMW", 3, false, 50, 300),
      new Scooter(0.5, 10, 100, 1, "Floppy", true, 80),
      new Scooter(0.5, 10, 100, 2, "Floppy", false, 20),
      new Bike(0.5, 10, 100, "Vespa", 1, true),
      new Bike(0.5, 10, 100, "Vespa", 2, false)
    ];
  
    const availableVehicles: Vehicle[] = [];
  
    for (const vehicle of vehicles) {
      if (isAvailable(vehicle)) {
        availableVehicles.push(vehicle);
      }
    }
    return availableVehicles;
  }
  
  console.log(getAvailableVehicle());

export{}