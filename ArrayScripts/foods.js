"use strict";
//Adding food items through a loop 

//Create Function 

function getMealCost(order) {
    let sum = 0 ;
    let numOrder = order.length;
    for(let i = 0; i < numOrder; i++) {
        sum += order[i].price;
    }
 return sum;
}

// Food Ordered Array 

let lunch = [
    {item: "Steak Fajitas", price: 9.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
    ] ;

    let mealCost = getMealCost(lunch) ;
    let tipString ="18%"
    let tip = 1.8
    let totalCostWithTip = mealCost * tip ;
    console.log("The Total Cost Of My Meal");
    console.log("Cost of Meal " + mealCost)
    console.log("Tip: " + tipString)
    console.log("My Lunch Cost " + totalCostWithTip.toFixed(2));