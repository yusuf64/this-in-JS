// this in global space

"use strict";

var a = 10;
// console.log(this);

// in non strict

function y() {
  console.log(this);
}

// y(); // outputs undefined when call without any object reference

// window.y(); // outputs global object when call with an object refernce

const obj = {
  name: "Khan",
  printName: function () {
    console.log(this.name);
  },
};

const obj2 = {
  name: "Yusuf",
};

// obj.printName();

// this keyword in arrow function

let details = {

  name: "Harley",
  product: "superBike",
  printName: () => {
    console.log(this); // trying to print the value of this inside an arrow function which is enclosed in a object
  },

  // Outputs: undefined or window, bcoz the lexical enviroment fo the object is global scope
};

details.printName();

// NOW lets see if we enclose the arrow funciton inside a normal function.

let details2 = {
  name: "Royal Enfield",
  product: "heavy bikes",
  printName: function () {
    const a = () => {
      console.log(this); // here arrow funciton is enclosed in a normal function whcih means the lexical enviraonment of arrow funciton here is  a normal fucntion , now if we call this in a normal function what will happen it will referece the object in whcih that method is present.
    };
    a();
  },
  // outputs the object details2 itself
};

details2.printName();
