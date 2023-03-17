"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const meinWort = "Hallihallo Sonnenschein!";
console.log(meinWort);
const aZahl = 42;
const bResult = aZahl;
console.log(bResult);
// const bZahl: number = true
//Hier wird das erste bZahl schon rot unterstrichen, da es sich um einen Boolean handelt.
// const cResult: ZahlOderString = bZahl
// console.log(cResult)
//Übung 3
function introduction(parameter) {
    return ("Hallo, die Antwort lautet: " + parameter);
}
introduction(42);
introduction("Sofia");
//Übung 4
function showContent(content) {
    if (typeof content === 'string') {
        console.log("Hallo, der enthaltene String lautet: ", content);
    }
    else if (typeof content === 'undefined') {
        console.log("Der Inhalt ist undefined.");
    }
    else {
        console.log("Weder String noch undefined, viellecht eine Zahl?");
    }
}
showContent("Hallöle");
showContent(undefined);
// showContent(42)
//Für 42 kann ich die Datei nicht ausführen, da keine Zahl erlaubt ist. Der else-Fall trifft also nie ein. 
//Übung 5
function keepPlaying(status) {
    if (typeof status === 'number') {
        if (typeof status <= '10') {
            console.log(true, "Anzahl an gespielten Spielen: ", status);
        }
        else {
            console.log(false, "Anzahl an gespielten Spielen: ", status);
        }
    }
    else if (typeof status === 'boolean') {
        if (status === true) {
            console.log(true, "Der Wert lautet", status);
        }
        else {
            console.log(false, "Der Wert lautet", status);
        }
    }
}
keepPlaying(5);
keepPlaying(11);
keepPlaying(true);
keepPlaying(false);
//Übung 6
function move(wurf) {
    if (wurf.toLowerCase() === 'links' || wurf.toLowerCase() === 'rechts') {
        if (wurf.toLowerCase() === "links") {
            console.log(1, " Der verwendete Wert ist: ", wurf);
        }
        else if (wurf.toLowerCase() === "rechts") {
            console.log(2, " Der verwendete Wert ist: ", wurf);
        }
    }
    else {
        console.log(wurf, " ist keine gültige Eingabe");
    }
}
move("LiNkS");
move("rEcHts");
move("ein Salto");
function move2(wurf) {
    if (wurf.toLowerCase() === 'links' || wurf.toLowerCase() === 'rechts') {
        if (wurf.toLowerCase() === "links") {
            return 1 + " Der verwendete Wert ist: " + wurf;
        }
        else if (wurf.toLowerCase() === "rechts") {
            return 2 + " Der verwendete Wert ist: " + wurf;
        }
        else if (wurf.toLowerCase() === "oben") {
            return 3 + " Der verwendete Wert ist: " + wurf;
        }
        else if (wurf.toLowerCase() === "unten") {
            return 4 + " Der verwendete Wert ist: " + wurf;
        }
    }
    else {
        return undefined + " ist keine gültige Eingabe";
    }
}
console.log(move2("LiNkS"));
console.log(move2("rEcHts"));
console.log(move2("rcHts"));
console.log(move2("ein Salto"));
//# sourceMappingURL=dienstagsUebung.js.map