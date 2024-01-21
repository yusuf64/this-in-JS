- this keyword is window in global space when we are in the browser and it is global object when we are in Node js

- this keyword acts differently in strict mode and non strict mode.

- In functional scope the value of this keyword depends on strict mode/not , in strict mode the value is undefined and in non strict mode the value is window object.

# What is this substitution?

- IN non strict mode whenever the value of this keyword is null or undefined, Javascript will replace the value of this keyword with the Global Oject.

# The value of this keyword also depends hwo its called

    - for ex: if in strict mode we are printing the value of this inside a function , and then if we call the function without any object reference , then the value will be undefined. but if we reference it with the object then it will print the global object.

    example : a() - outputs undefined.
               window.a() - outputs global object
