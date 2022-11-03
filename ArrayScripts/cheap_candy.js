"use strict"; 

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    // TODO: fill the array with 10 candies of various
    // price ranges
   ];

   function getCandyElemts(products, price) {
    let Search = [] ;
  
    for(let i = 0; i < products.length; i++) {
      if(products[i].price == price) {;
          Search.push(products[i]);
      }
    }
    return Search
  }
  
  let Pricelowerthan = getCandyElemts(products, price);
  let lowerprices = Pricelowerthan.length;
  for(let i = 0; i < lowerprices; i++) {
      console.log("PRO200 Class Start on " + Pricelowerthan[i].price);
  }

