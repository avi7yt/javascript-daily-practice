// Object is collection of key-value pairs.
// 1. Creating Objects
// a. Using curly braces:
const user = {
    name: "Avi",
    age: 19,
    role: "Developer"
};

const car = {
    brand: "Tesla",
    "model number": "Model 3",
    year: 2024
};

// b. using Object constructor: 
const person = new Object;
person.name = "Ram";
console.log(person);


// 2. Accessing Object Properties - 
// dot notation: 
console.log(user.name);
// console.log(car.model number); //with dot notation can not access model number


// bracket notation:
console.log(user["age"]);
console.log(car["model number"]);

// 3. Adding Properties- 
user.country = "India";
console.log(user);

// 4. Updating Properties- 
user.age = 20;
console.log(user);

// 5. Deleting Properties-
delete user.role;
console.log(user);

// 6. Objects with Methods-
const newPerson = {
    name: "Avi",
    greet: function(){
        console.log("Hello ",this.name); // this refers to the current object.
    }
};

newPerson.greet();

// 7. Nested Objects- 
const student = {
    name: "Avi",
    marks: {
        math: 90,
        physics: 85
    }
};

console.log(student.marks.physics);

// 9. Loop Through Object-

const profile = {
    name: "avi",
    age: 19,
    city: "Delhi"
};

for (const key in profile) {
    console.log(key, profile[key]);
}








