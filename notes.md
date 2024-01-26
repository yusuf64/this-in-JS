- this keyword is window in global space when we are in the browser and it is global object when we are in Node js

- this keyword acts differently in strict mode and non strict mode.

- In functional scope the value of this keyword depends on strict mode/not , in strict mode the value is undefined and in non strict mode the value is window object.

# What is this substitution?

- IN non strict mode whenever the value of this keyword is null or undefined, Javascript will replace the value of this keyword with the Global Oject.

# The value of this keyword also depends hwo its called

    - for ex: if in strict mode we are printing the value of this inside a function , and then if we call the function without any object reference , then the value will be undefined. but if we reference it with the object then it will print the global object.

    example : a() - outputs undefined.
               window.a() - outputs global object

# How this reacts in Arrow function ?

Arrow function dont have thier own this context, the value of the this keyword will depend on the enclosed lexical context, if we have and arrow function inside an object literal the value of this will be the global window or object, because it is enclosed in an object which has global scope as it lexical environment.

if we enclosed the arrow function inside a method, it will acts as if it is present in the same method and the value of this will be the object itslef

BECAUSE ARROW FUNCTION DOES NOT HAVE THIER OWN THIS BINDING, THEY RETAIN THE VALUE OF THIS OF ITS LEXICAL CONTEXT

see the example for more clarity

# how this keyword works in DOM?

in DOM it will reference to ITS HTML ellmeent
