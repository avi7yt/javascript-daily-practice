// 1. Creating Arrays:
let arr = [1,2,3,4,5];  //using pair of square bracket.
let myArr = new Array('apple','banana');  //using array constructor.
console.log(arr.length); //it gives the number of element in array.

// another way --> Array.of(), Arrays.from() and spread operator(...);

// 2. How to get Element from an Array in JS.
console.log(arr[0]); // using [index];
// loop through the arrays:
// for loop
for (let i = 0; i < arr.length; i++) {
    console.log(`Element at ${i} is ${arr[i]}`);    
}

// forEach
arr.forEach((num,index,myarr) =>{
    console.log(`Element at ${index} is ${num} from array is ${myarr}`);

});

// 3. How to Add and Remove Elements to and from the Array in JS.
let animal = ['dog','cow','donkey','monkey'];
// Adding elements to the array
// push() - to add elements at the end.
animal.push('lion');
console.log(animal); //[ 'dog', 'cow', 'donkey', 'monkey', 'lion' ]

//unshift() - to add elements at the beginning.
animal.unshift('wolf');
console.log(animal); //[ 'wolf', 'dog', 'cow', 'donkey', 'monkey', 'lion' ]

// Removing elements from the array
// pop() - remove an element from end. 
animal.pop(); 
console.log(animal);// [ 'wolf', 'dog', 'cow', 'donkey', 'monkey' ]-lion removed.

// shift() - remove an element from beginning.
animal.shift();
console.log(animal); // [ 'dog', 'cow', 'donkey', 'monkey' ] - wolf removed.

// 4. How to copy and clone an Array in JS.
// slice() - does not change the original arrays, only create new shallow copy.
let copyAnimal = animal.slice();
console.log(copyAnimal);
// but 
console.log(copyAnimal === animal); // false, because it create other memory
// Alternatively, you can use the spread operator to create a copy of the array. 

// 5. how to determine if a value is an Array in Js.
let workout = ['push-ups','pull-ups','squads'];
console.log(Array.isArray(workout)); // true

// 6. Array Destructuring in JavaScript
// let [tomato, mushroom, carrot] = ['🍅', '🍄', '🥕'];
// console.log(tomato, mushroom, carrot); // Output, 🍅 🍄 🥕

// -> How to Assign a Default Value to a Variable
let [a,b,c = 'cat'] = ['apple','bat','canva'];
console.log(a,b,c); //apple bat canva

// --> How to Skip a Value in an Array
let [d,,f] =['donkey','elephant','fish'];
console.log(d); //donkey
console.log(f); //fish

// --> Nested Array Destructuring in JS
let fruits = ['🍈', '🍍', '🍌', '🍉', ['🍅', '🍄', '🥕']];

//How would you access the '🥕' from the above array? Again, you could do this without destructuring, like this:
const veg = fruits[4]; // returns the array ['🍅', '🍄', '🥕']
const cart = veg[2]; 
console.log(cart); //// returns '🥕'
// Alternatively, you could use this short-hand syntax:
console.log(fruits[4][2]); // returns '🥕'

// How to Use the Spread Syntax and Rest Parameter in JavaScript
// use of rest operator 
const [tomato, mushroom, ...rest] = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
console.log(tomato); // '🍅'
console.log(mushroom); // '🍄'
console.log(rest); // [ '🥦', '🥒', '🌽', '🥕', '🥑' ]

// use of spread operator
// we can create a clone/copy of an existing array
const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
const saladCloned = [...salad];
console.log(saladCloned); // ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"]
console.log(salad === saladCloned) ; // false

// Concat()
const first = [1,2,3];
const second = [4,5,6];
const third = [7,8,9];
const merged = first.concat(second);
const mergedMany = first.concat(second, third)  //we can merge more than two arrays
console.log(merged); //[ 1, 2, 3, 4, 5, 6 ]
console.log(mergedMany); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// join() - Joins all elements using a separator and returns a string
const employee = ['abhay','arun','arti','raj'];
const joined = employee.join();  
console.log(joined); //return string - abhay,arun,arti,raj

// You can pass a separator of your choice to join the elements
const anothrJoined = employee.join("/");
console.log(anothrJoined); //abhay/arun/arti/raj

// If apply join method on empty array it returns empty string.
const emptyArr = [];
console.log(emptyArr.join()); //return empty string

// fill() - fills an array with a static value
const colors = ['red', 'blue', 'green'];
colors.fill('pink');
console.log(colors); //[ 'pink', 'pink', 'pink' ]
colors.fill('pink',1,3);
console.log(colors);

// includes() - it checks the presence of element and return true or false.
const users = ['rohit','rohan','ajiit','rahun'];
console.log(users.includes('rohit')); //true
console.log(users.includes('arvind')); //false

// indexOf() - returns index of first occurence of an element.
console.log(users.indexOf('rohit')); // 0 = found
console.log(users.indexOf('arvind')); // -1 = not found

// lastIndexOf() - returns index of last occurence of an element.
users.push('rohit');
console.log(users);
console.log(users.indexOf('rohit')); // 0
console.log(users.lastIndexOf('rohit')); // 4

// reverse() - reverses the element position 
const todo = ['go to market','solve problems','call the doctor'];
todo.reverse(); //it modifies the original array.
console.log(todo); //[ 'call the doctor', 'solve problems', 'go to market' ] 

// sort() - converts element types to string and then sorts.
const empname = ['tom', 'alex', 'bob'];
empname.sort();
console.log(empname); //[ 'alex', 'bob', 'tom' ]

const numbers = [23, 5, 100, 56, 9, 13, 37, 10, 1];
numbers.sort();
console.log(numbers); //[1, 10, 100, 13, 23, 37,  5,  56,  9]
// it is converting element in string then comparing on the basis of UTF-16 code unit values.

// write a comparator function and pass to the sort()
function ascendingComp(a,b){
    return (a-b);
}

numbers.sort(ascendingComp);
numbers.sort((a,b) => a-b); //ascending
console.log(numbers);
numbers.sort((a,b) => b-a); //descending
console.log(numbers); 

// splice() - method helps you add, update, and remove elements in an array. 
const names = ['tom', 'alex', 'bob'];
names.splice(1,0,'zack');
console.log(names); //[ 'tom', 'zack', 'alex', 'bob' ]

const deleted = names.splice(2, 1, 'zack');
console.log(deleted);
console.log(names);

// Array.from() - It converts an array-like object to an array

console.log(document.getElementsByTagName('li'));  // it gives html-collection which is array-like object

const collection = Array.from(document.getElementsByTagName('li'));
console.log(collection);
collection.forEach((element) => {
    console.log(element); 
})

const arrayOf = Array.of(2, false, 'test', {'name': 'alex'});
console.log(arrayOf);

// filter() - method creates a new array with all the elements that satisfies the condition mentioned in the function.

let students = [
   {
      'id': 1,
      'f_name': 'Alex',
      'l_name': 'B',
      'gender': 'M',
      'married': false,
      'age': 22,
      'paid': 250,  
      'courses': ['JavaScript', 'React']
   },
   {
      'id': 2,
      'f_name': 'Ibrahim',
      'l_name': 'M',
      'gender': 'M',
      'married': true,
      'age': 32,
      'paid': 150,  
      'courses': ['JavaScript', 'PWA']
   },
   {
      'id': 3,
      'f_name': 'Rubi',
      'l_name': 'S',
      'gender': 'F',
      'married': false,
      'age': 27,
      'paid': 350,  
      'courses': ['Blogging', 'React', 'UX']
   },
   {
      'id': 4,
      'f_name': 'Zack',
      'l_name': 'F',
      'gender': 'M',
      'married': true,
      'age': 36,
      'paid': 250,  
      'courses': ['Git', 'React', 'Branding']
   } 
];

const femaleStudents = students.filter((element) => {
    return element.gender === 'F';
}); 
console.log(femaleStudents);

// map() - method creates a new array by iterating through the elements and applying logic we provided in the function as an argument.

const fullNames = students.map((element,index) => {
    return {'fullName': element['f_name'] + ' ' + element['l_name']}
});

console.log(fullNames);

const total = students.reduce((acc,student,currentIndex,array) =>{
    acc = acc + student.paid;
    return acc;
},0)
console.log(total);
















 





