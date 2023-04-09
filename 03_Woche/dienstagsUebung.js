"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Übung 1
function sum(wertA, wertB) {
    return (wertA + wertB);
}
console.log(sum(2, 3));
function sumB(array) {
    let sth = 0;
    for (let i = 0; i < array.length; i++) {
        sth += array[i];
        // Lars Alternative statt der for-Schleife: 
        //let result = ""
        //array.forEach((element)=> { result += element})
        // ODER
        //return array.reduce((a,b)=> a+b, 0)
    }
    return sth;
}
console.log(sumB([1, 4, 7]));
console.log(sumB([]));
//Übung 2
function sumC(array) {
    return array.map((result) => result.toString()).join("");
}
console.log(sumC([1, "zwei", 7]));
//Übung 4
function sumD(array) {
    return array.length;
}
console.log(sumD([1, "zwei", 7]));
console.log(sumD([1, "zwei", 7, 4, 2, 6]));
//Übung 5
function sumE(array) {
    return array[array.length - 1];
}
console.log(sumE([1, "zwei", 7]));
console.log(sumE([1, "zwei", 7, 4, 2, 6]));
console.log(sumE([]));
//Lars Alternative
function genericLength(arr) {
    const size = arr.length;
    if (size < 1) {
        return undefined;
    }
    return arr[size - 1];
}
console.log(genericLength([1, "zwei", 7]));
console.log(genericLength([1, "zwei", 7, 4, 2, 6]));
console.log(genericLength([]));
//Übung 6
function sumF(arr) {
    const size = arr.length;
    if (Array.isArray(arr)) {
        if (size < 1) {
            return undefined;
        }
        return arr[size - 1];
    }
}
console.log(sumF([1, "zwei", 7]));
console.log(sumF([1, "zwei", 7, 4, 2, 9]));
//console.log(sumF(3))
//Lars Alternative
function sumL(arr) {
    if (Array.isArray(arr)) {
        return sumF(arr);
    }
    return arr;
}
//# sourceMappingURL=dienstagsUebung.js.map