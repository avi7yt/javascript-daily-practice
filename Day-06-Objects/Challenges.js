// 1. create an object and Print all keys and values.
const user = {
    name: "Rahul",
    age: 20,
    city: "Lucknow"
}

// print keys-
for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}

// 2. Count number of properties in an object.
let keyCount = Object.keys(user).length;
console.log(keyCount);

// 3. Convert object into array.
let userArr = Object.entries(user);
console.log(userArr);

// 4. Merge two objects.
const obj1 = {a:1};
const obj2 = {b:2};
const newObj = {...obj1, ...obj2};
console.log(newObj);




