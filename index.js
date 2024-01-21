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

obj.printName();


