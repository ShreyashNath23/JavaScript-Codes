"use strict";

const oneWord = function (str) {
  return str.replace(/ /g, " ").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best language", upperFirstWord); //We are only calling the value of the function, we are not calling the fubnction
transformer("JavaScript is the best language", oneWord);

const high5 = function () {
  console.log("👏");
};

document.body.addEventListener('click', high5);
['Shreyash', 'Yo', 'Me'].forEach(high5);
