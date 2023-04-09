//Übung 1
import * as readline from "readline";
type Action = "moveLeft" | "moveRight" | "moveUp" | "moveDown";
type Position = [number, number];
//const pos = [3,4]

function performActionLight(pos: Position, action: Action): Position{
    const x= pos[0] //= 3
    const y= pos[1] //= 4
    switch(action) {
    case "moveLeft": {
        return [x-1, y]
    }
    case "moveRight": {
         return [x+1, y]
    }
    case "moveUp": {
        return [x, y-1]
    }
        case "moveDown": {
            return [x, y+1]
        }
    }
}

function isLegalPosition(pos: Position): boolean{
    const x= pos[0] //= 3
    const y= pos[1] //= 4
    if (x<0) {
        return false
    }
    if (y<0) {
        return false
    }
    if (y>7) {
        return false
    }
    if (x>7) {
        return false
    }
    return true
}

//Aufg. 2-4
function performAction(pos: Position, action: Action): Position{
    const x= pos[0] //= 3
    const y= pos[1] //= 4
    const nextPos: Position = performActionLight(pos, action)
    if(isLegalPosition(nextPos)){
        return nextPos
    }
    return pos
}

function toAction(userInput: string): Action{
//Das ist eine Hilfsfunktion die später in runGame benötigt wird
if (userInput == "links"){
    return "moveLeft"
}
if (userInput == "rechts"){
    return "moveRight"
}
if (userInput == "hoch"){
    return "moveUp"
}
if (userInput == "runter"){
    return "moveDown"
}
return undefined
}

console.log(performAction([2,3], "moveDown"))

type FieldType = "empty" | "wall"| "treasure"

const playingField: FieldType[][] = [
    //[["wall"],["empty"]]
    //X- & Y-Achse sind hier gedreht. Ein Array ist eine vertikale Reihe.
    ["empty", "empty", "empty", "empty", "empty", "wall", "wall", "wall"],
    ["wall", "wall", "wall", "wall", "empty", "wall", "treasure", "wall"],
    ["wall", "wall", "wall", "wall", "empty", "wall", "empty", "wall"],
    ["empty", "empty", "empty", "empty", "empty", "wall", "empty", "wall"],
    ["empty", "wall", "wall", "wall", "wall", "wall", "empty", "wall"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "wall"],
    ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"],
    ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"],
  ];
  const test: FieldType[] = playingField[3] 
  // playingField[3]  ist der Y-Wert und test[5] ist der X-Wert
console.log(test[5], "test")


//Das let rl hat mit dem readLine-Package zu tun. Die Funktionsweise muss hier nicht in Gänze durchdrungen werden. 
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true,
});

function runGame(
  startingPosition: Position,
  playingField: FieldType[][]
): void {
  console.log("Current Positon: " + startingPosition);
  console.log("Gebe einen der folgenden Befehle ein: links, rechts, oben, unten");
  let currentPosition = startingPosition;
  rl.question("Richtung: ", (answer) => {
    
    currentPosition = performAction(currentPosition, toAction(answer))
const x = currentPosition[0]
const y = currentPosition[1]
const field: FieldType= playingField[x][y]
console.log("Aktuelles Feld: " + field)
    runGame(currentPosition, playingField);
  });
}
runGame([0,0], playingField);
export {}