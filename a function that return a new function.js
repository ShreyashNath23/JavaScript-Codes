"use stric";

const greeting = function (greet) { //A function calling another function.
  return function (name) {
    console.log(`${greet} ${name}`);
  };
};

const greetingHey = greeting("Hey!!");
greetingHey("Shreyash");
greetingHey("Diksha");

greeting("Hello!")("Shreyash");

const greetarr = (greeting) => (name) => console.log(`${greeting} ${name}`);  //An arrow function calling another arrow function.
greetarr("Hi")("Shreyash");

