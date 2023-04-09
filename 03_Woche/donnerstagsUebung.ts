//Aufg. 1, 2
type NameBirthday = [string, Date]

function daysUntil(person: NameBirthday): number{
    // Rückgabetyp void, da sie keine Rückgabe liefert. Stattdessen gibt sie nur etwas auf der Konsole aus.
const today: Date = new Date()
const nextBirthday: Date = new Date(today.getFullYear(), person[1].getMonth()-1, person[1].getDate())
// Durch das person[1].getMonth()-1 hat man der Monatsangabe 1 abgezogen. Dadurch kommt man im Ergebnis wieder auf die richtige Zahl und kompensiert das 0-basierte Zählen. 
if (nextBirthday < today){
    nextBirthday.setFullYear(nextBirthday.getFullYear()+1)
}
const timeDifference: number = nextBirthday.getTime() - today.getTime();
const days: number = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
const age: number = today.getFullYear() - person[1].getFullYear();
//console.log(`${person[0]}'s ${age}. Geburtstag ist in ${days} Tagen.`);
return days
}
daysUntil(["Peter", new Date(1994,11,16)])
daysUntil(["Peter2", new Date(1988,4,13)])
daysUntil(["Peter3", new Date(1988,5,13)])
daysUntil(["Peter4", new Date(1988,6,13)])

//Aufg. 3 
//Den Typ holt er sich aus der vorherigen Aufgabe, da wurde er schon definiert.
function birthdayList(events: NameBirthday[]): void {
    const today: Date = new Date();

    for (const person of events) {
        const daysUntilEvent: number = daysUntil(person);
        console.log(`${person[0]}'s nächster Geburtstag ist in ${daysUntilEvent} Tagen.`);
    }
}
birthdayList([
    ["Peter2", new Date(1988,4,13)],["Peter", new Date(1994,11,16)],
     ["Peter4", new Date(1988,6,13)],
   ["Peter3", new Date(1988,5,13)],
  ]); 

  function getNextBirthday(events: NameBirthday[]): string {
    const today: Date = new Date();
    const sortedEvents = events.sort((a, b) => daysUntil(a) - daysUntil(b));
    const nextEvent = sortedEvents.find(event => daysUntil(event) >= 0);
    return nextEvent ? nextEvent[0] : "Keine Geburtstage in naher Zukunft";
}
const nextBirthday: string = getNextBirthday([
    ["Peter2", new Date(1988, 4, 13)],
    ["Peter", new Date(1994, 11, 16)],
    ["Peter4", new Date(1988, 6, 13)],
    ["Peter3", new Date(1988, 5, 13)],
]);

console.log(`Die nächste Person mit Geburtstag ist ${nextBirthday}`);


export {}