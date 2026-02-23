// Number constructor

// without new
let num =  Number("12");
// console.log(typeof num); //converts primitve number.

// with new 
let objNum = new Number("12");
// console.log(typeof objNum);

// console.log(num == objNum); //check equality - true
// console.log(num === objNum); //strict equality - false

// Number methods:
let newNum = 12;
console.log(typeof newNum);

//toString(): convert number into string
console.log(typeof newNum.toString());

//toFixed(n): rounds number to n decimal places and returns string.
let deciNum = 5.6789
console.log(deciNum.toFixed(2));
console.log(typeof deciNum.toFixed(2));

//toPrecision(n): controls total digits, not decimal places.
let preciNum = 123.456;
console.log(preciNum.toPrecision(4));

//toLocaleString(): Formats number according to country/region: 
let formatNum = 1000000;
console.log(formatNum.toLocaleString()); //us format
console.log(formatNum.toLocaleString("en-IN")); //Indian Format


// Math Object:

// Math Constants:
console.log(Math.PI); //value of pi
console.log(Math.E); 
console.log(Math.SQRT2); //square root of 2
console.log(Math.LN2);  // Natural log of 2

// Problem: Find Area
let radius = 5;
let area = Math.PI * radius**2;
console.log(area);

// Methods

// 1. Math.round(): reads to nearest integer;
console.log(Math.round(4.6)); //5
console.log(Math.round(4.4)); //4

// 2. Math.ceil(): always round up;
console.log(Math.ceil(4.1)); //5
console.log(Math.ceil(4.9)); //5

// 3. Math.floor(): Always rounds down;
console.log(Math.floor(4.1)); //4
console.log(Math.floor(4.9)); //4

// 4. Math.trunc(): Removes decimal part;
console.log(Math.trunc(4.9)); //4
console.log(Math.trunc(-4.9)); //-4

// 5. Math.random(): Returns number between 0 and 1 in which 0 is inclusive and 1 is exclusive --> [0,1);

console.log(Math.random());

// 6. Math.pow(): power of number;
console.log(Math.pow(2,3)); //8

// 7. Math.sqrt(): square of root of number;
console.log(Math.sqrt(16)); //4

// 8. Math.cbrt()
console.log(Math.cbrt(27)); //3

// 9. Math.abs(): absolute value;
console.log(Math.abs(-10)); //10

// 10. Math.min(): minimum of numbers;
console.log(Math.min(10,20,30)); //10

// 11. Math.max(): maximum of numbers;
console.log(Math.max(10,20,30,40,50)); //50

// 12. Logarithmic Methods;
console.log(Math.log(10));  //natural log
console.log(Math.log10(100));  //base 10
console.log(Math.log2(8));  //base 2

// One interesting thing I discovered:
// console.log(0.1+0.2 !== 0.3); // true 
// Floating point precision issue























