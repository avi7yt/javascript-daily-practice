// 1. for loop (Most Common Loop) - Jab aapko pata ho kitni bar loop run hoga
// Print table- 
let tableOf = 2;
for(let i =1; i <= 10; i++){
    console.log(`${tableOf} * ${i} = ${tableOf * i}`);
}

// Print array element- 
const arr = [10,20,30];
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// 2. while loop- Jab iteration count fixed nhi ho.
// print number from 0 to 10;
let int = 0;
while(int <= 10){
    console.log(int);
    int++;
}

// run on browser console- 
// Loop kb tk chalega hme nhi pta lekin ye pata hai loop tab tak chalega jab tak correct password nahi aata.
// let password = "";
// while(password !== "admin"){
//     // password = prompt("Enter password");
// }

// 3. do...while loop- code atleast ek baar toh run hoga.
let i = 1;
do{
    console.log(i);
    i++;
}while(i <= 0); //here condition is false but after it prints 1.

// 4. for...of loop- Arrays, Strings, Iterables ke liye use krte hain. 
// user with - arrays, strings, maps, sets.
const arr2 = [10,20,30];
for(const value of arr2){
    console.log(`index: ${arr2.indexOf(value)}, value: ${value}`);
}

const name = "Avi";
for(const char of name){
    console.log(char); 
}

// 5. for...in loop - Objects iterate karne ke liye use karte hain. 
const user = {
    name: "avi",
    age: 19,
    city: "Delhi"
}

for(const key in user){
    console.log(key, user[key]);
}

// Important loop keywords.
// 1. break- Loop ko immediately stop kar deta hai.
for(let i = 1; i <= 10; i++){
    if (i === 5) {
        break
    }
    console.log(i);
}

// 2. continue- Current iteration skip karta hai.
for(let i = 1; i <= 10; i++){
    if (i === 5) {
        continue //5 will not print.
    }
    console.log(i);
}

// Nested Loops- matrix problems, patterns, grid systems.
for(let i = 1; i <= 3; i++){
    for(let j = 1; j <= 3; j++){
        console.log(i, j);
    }
}



