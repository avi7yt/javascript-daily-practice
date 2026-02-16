// variables:
let name = "Akash"; //changeable and block scoped.
const lastName = "Vishwakarma"; //Not changeable and block scoped.
var age = 20;//changeable and function scoped.

// Datatypes in Javascript:
// Primitive:
let message = "Hello world"; //string
const userage = 20; //number
let userValidation = true; //boolean
let user; //undefined
let y = null; //null
let bignumber = 1234567890123456789; //bigint
let symbol = Symbol("id"); //symbol

console.log(typeof message);
console.log(typeof age);
console.log(typeof userValidation);
console.log(typeof user);
console.log(typeof y);
console.log(typeof bignumber);
console.log(typeof symbol);

// Non-Primitve (Reference type):
let fruits = ["apple", "mango", "banana"]; //array
let obj = {
    name: "avi",
    age: 19,
    country: "India"
} // object

let greet = function(name){
    console.log(`Hello ${name}`);
} //function

greet("Akash");





