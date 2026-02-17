// Task 1:
// 1. Take a number and check:
//    •	Positive / Negative / Zero

let number = 3;
if (number > 0) {
    console.log(`Number is Positive`);
}else if (number = 0) {
    console.log(`Number is Zero`);   
}else{
    console.log(`Number is Negative`);   
}

// Task 2:
// Check if a number is divisible by both 3 and 5.
if (number % 3 == 0 && number % 5 == 0) {
    console.log(`Number is divisible by both 3 and 5`);
}else{
    console.log(`Number is divisible NOT by both 3 and 5`);
}

// Task 3:

// Take age and print:
// 	•	Child (<13)
// 	•	Teen (13–19)
// 	•	Adult (20+)

let age = 20;
if (age < 13) {
    console.log("You are a child");
}else if(age > 13 && age <= 19){
    console.log("You are a teen");
}else{
    console.log("You are an adult");
}
