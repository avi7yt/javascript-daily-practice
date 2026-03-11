// 1. Object.keys()- it returns array of keys of object
const user = {
    name: "Avi",
    age: 19,
    "e-mail": "avivishw@gmail.com",
    "phone number": 966464647373
};

let keys = Object.keys(user);
console.log(keys);  //[ 'name', 'age', 'e-mail', 'phone number' ]

// 2. Object.values()- it returns array of values of object
let values = Object.values(user);
console.log(values);

// 3. Object.entries()- it returns a nested array in which each array contains single key value pair
let entries = Object.entries(user);
console.log(entries); 
//[
//   [ 'name', 'Avi' ],
//   [ 'age', 19 ],
//   [ 'e-mail', 'avivishw@gmail.com' ],
//   [ 'phone number', 966464647373 ]
// ]

// 4. Object.assign(target,source1, source2,....)- copy properties of objects to the targeted object 
const obj1 = {
    name: "Sufyan"
}

const obj2 = {
    age: 23
}

const newObj= Object.assign(obj1, obj2, {college: "ABES EC"});
console.log(newObj);
console.log(obj1);

// 5. Object.freeze() - Makes object immutatble means further no updation.
const newuser = {
    name: "avi"
}; 
// now I can change name property-
newuser.name = "Ravi";
console.log(newuser);


// but now I can not change name property-
Object.freeze(newuser);
newuser.name = "Shyam"; 
console.log(newuser);


// 6. Object.seal() - can modify properties but cannot add/delete.
const car = {
    brand: "Tesla",
    model: "model 3",
    year: 2024
}

Object.seal(car);
car.color = "blue";
console.log(car); //{ brand: 'Tesla', model: 'model 3', year: 2024 } - property didn't add.

// 7. Spread Operator with Objects- 
const userNames = {name: "avi"};
const details = {age: 19};
const userInfo = {...userNames, ...details};
console.log(userInfo); //{ name: 'avi', age: 19 }

// 8. Destructuring Objects(Important)- 
// very common in react.
const userProfile = {
    name: "avi",
    age: 19
};

const {name, age} = userProfile;
console.log(name);

// 9. Object Shorthand- 
const myName = "Avi";
const myUser = {
    name: name
}

// we can - 
const myuser2 = {name}; 










