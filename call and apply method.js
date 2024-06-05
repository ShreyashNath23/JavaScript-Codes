"use strict";

const airIndia = {
  name: "Air India",
  code: "AIR",
  bookings: [],
  book(flightNumber, name) {
    //book is a method here...
    console.log(
      `${name} book a seat in airline ${this.name} flight ${this.code}${flightNumber}`
    );
    this.bookings.push({ flight: `${this.code}${flightNumber}`, name });
  },
};

airIndia.book(239, "Shreyash");
airIndia.book(239, "LOL");

console.log(airIndia);

const euroWings = {
  name: "EuroWing",
  code: 787,
  bookings: [],
};

const book = airIndia.book; //Here, book is now a regular fuction. Not a method/
//In regular function call, this keyword points to undefined.
//Now, here book is just regular function.
// book("23", "qwerty");
//This is regular function call.

//How do we vreate booking for wuroWings??
//Call and Apply Method....

book.call(euroWings, 23, "Shreyash");
console.log(euroWings);
book.call(airIndia, 76, "Mary");

//Apply method .....Basically do the same//

const swiss = {
   name: 'Swiss Airlines',
   code: 'SA',
   bookings: [],
}

const flightData = [583, "George Cooper"];
book.apply(swiss, flightData); //Argument is provided as an Array(second argument)... ///First argument is where the .this element should point.
console.log(swiss);
//