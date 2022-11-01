"use strict";

// Excercise 2 Get the average 

function getAverage(scores){
    let sum = 0; 
    let count = scores.length;
    for(let i = 0; i < count; i++) {
        sum += scores[i];
    }
    return sum/count
}


let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

let theaverage = getAverage(myScores);
let myScoresAverage = theaverage;
console.log("Average of my scores is " + theaverage.toFixed(2));

theaverage = getAverage(yourScores);
let yourScoresAverage = theaverage;
console.log("Average pf your scores is " + theaverage.toFixed(2));
