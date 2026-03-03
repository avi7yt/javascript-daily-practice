// 1. Creating Arrays:
let arr = [1,2,3,4,5]; //store any type of data
let fruits = new Array("apple", "banana", "mango", "guava");

// 2. Accessing and Modifying:
console.log(arr[0]);  // accessing 
arr[1] = 10; // modify
console.log(arr.length) // length = 5

// #3. Important Array Methods(Must Know)

// $Adding and Removing Elements: 
// push() - Add at end
arr.push(6);

// pop() - remove from end
arr.pop();

// unshift() - Add at beginning
arr.unshift(0);

// shift() - Remove from beginning
arr.shift();

// $Searching Methods: 
// indexOf()
arr.indexOf(3);

// includes()
console.log(arr.includes(2)); // Return true and false

// $Transforming Methods: 
// slice() - Copy portion (no change in original)
console.log(arr.slice(1,3)); //[ 10, 3 ] 

// splice() - Add/remove (Changes original)
let numArr = [10, 20, 30, 40, 50];
numArr.splice(1, 2);
console.log(numArr); //[ 10, 40, 50 ] remove (20,30);

numArr.splice(1,0,15); //Inserting 15 at index 1;
console.log(numArr); //[ 10, 15, 40, 50 ]

numArr.splice(1,1,99); // Replace item at index 1 with 99;
console.log(numArr); // [ 10, 99, 40, 50 ]

// concat() 
let arr1 = [1, 2];
let arr2 = [3, 4];
let mergedArr = arr1.concat(arr2);
console.log(mergedArr);

// spread operator (...);
let newMergedArr = [...arr1, ...arr2];
console.log(newMergedArr);

// $Sorting 
// sort()
let randomArr = [1,3,4,2,0];
console.log(randomArr.sort((a,b) => a-b)); //[ 0, 1, 2, 3, 4 ]
// reverse()
console.log(randomArr.reverse()); //[ 4, 3, 2, 1, 0 ]

// Array



















