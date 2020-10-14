"use strict";

function get100Numbers () {
    const arrayNumbers = []
    for (let i=1; i <=100; i++) {
    arrayNumbers.push(i);
    console.log(arrayNumbers);
    }
    return arrayNumbers
}


function getReversed100Numbers () {
    let arrayReverse = get100Numbers()
    console.log(arrayReverse.reverse())
}
getReversed100Numbers()