class Vehicle {
    private pricePerMinute: number;
    private priceToUnlock: number;
    private distanceTravelled: number;
    private name: string;
    private id: number;
    private taken: boolean;

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
export{}