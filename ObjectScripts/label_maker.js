"use strict";

 let labelMaker = {
     name: "Megan Sampson", 
     address: "120 Van Siclen Ave Apt 2F", 
     city: "Brooklyn", 
   state: "NY",
    zip: "11207",
    };

    function printContact(name, address, city,state,zip) {
    
        console.log("Name:" + labelMaker.name);
        console.log("Address:" + labelMaker.address);
        console.log("Brooklyn:" + labelMaker.city);
        console.log("City:" + labelMaker.city + ", "  +  labelMaker.state  + " " + labelMaker.zip)
    }
    
    printContact()
    
