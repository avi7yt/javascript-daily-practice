// String - A string is a sequence of characters used to represent text.
//1. types of string quotes- 
let name = "Avi"; // double quote - normal strings
let message = 'Hello World'; //same as double.
console.log(message);

// Template literals-
let template = `Welcome ${name}`; //Dynamic strings
console.log(template);

// 2. String Properties- 
// length - return number of characters.
let str = "Javascript";
console.log(str.length);

// 3. Basice String Methods (Most Used)
// 1. toUpperCase() - 
let text = "Hello";
console.log(text.toUpperCase()); //HELLO

// 2. toLowerCase()-
console.log(text.toLowerCase()); //hello

// 3. trim()- Removes spaces from start and end.
    text = "   hello   ";
    console.log(text.trim()); //hello

// 4. slice()- Extracts part of string.
    let str2 = "JavaScript";
    console.log(str2.slice(0,4)); //Java

// 5. substring()- similar to slice. It does not support negative indexes.
    console.log(str2.substring(0,4)); //Java

// 6. replace()- Replace text.
    let text2 = "Hello world";
    console.log(text2.replace("world","Avi")); //Hello Avi

// 7. replaceAll()- replace all occurrences.
    let text3 = "cat dog cat";
    console.log(text3.replaceAll("cat","lion")); //lion dog lion

// 8. includes()- Check if string contains something.
    let text4 = "JavaScript";
    console.log(text4.includes("Script")); //true

// 9. startsWith()- Check string start with something.
    let text5 = "JavaScript";
    console.log(text5.startsWith("Java")); //true
    
// 10. endsWith()- Check string ends with something.
    console.log(text5.endsWith("Script")); //true


// Important Developer Methods -- 

// 1. split()- convert string -> array.
    let text6 = "apple, banana, mango";
    let arr = text6.split(","); // splitter dena pdta hai.
    console.log(arr); //[ 'apple', ' banana', ' mango' ]
    
// 2. join()- array method but used with strings.
    let words = ["Hello", "World"];
    console.log(words.join(" ")); //Hello World - seperator dena pdta hai.

// 3. concat()- combine strings.
    let a = "Hello";
    let b = "World";
    console.log(a.concat(" ", b)); //Hello World

// but better way is backtick ``;

// 4. repeat()- 
    let str3 = "Hi ";
    console.log(str3.repeat(3)); //Hi Hi Hi 

// 5. Character Access Methods.

// a. charAt()
    let str4 = "Javascript";
    console.log(str4.charAt(0)); //J

// b. at()- Modern method
    console.log(str4.at(-1)); //t

// c. charCodeAt()- Returns ASCII code.
    console.log(str4.charCodeAt(0)); //74

// 6. Searching Methods 

// a. indexOf()- search from start.
    let text7 = "Hello World";
    console.log(text7.indexOf("World")); //6

// b. lastIndexOf()- search from end.
    console.log(text7.lastIndexOf("o")); //7

// c. search()- used with regex.
    console.log(text7.search("World")); //6
    
// 7. Advanced String Methods (Developer Level)

// a. match()- used with regex.
    let text8 = "I love Javascript";
    console.log(text8.match("Javascript"));

// b. matchAll()- Find multiple matches.
    let text9 = "cat dog cat";
    let result = text9.matchAll(/cat/g);
    console.log(result);
    
// c. padStart(), padEnd - Used in OTP, IDs, formatting numbers
    let num = "5";
    console.log(num.padStart(3,"0")); //005
    console.log(num.padEnd(3,"0")); //500
    
    
    

    
    
    
    

    








