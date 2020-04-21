const age = 20;

let greeting;

if (age < 10) {
  greeting = "Hey there"; 
} else {
  greeting = "That's an interesting age!";  
}
console.log(greeting);

//如何簡短表示
const age = 20;

const greeting = age < 10 ? "Hey there" : "That's an interesting age!";
console.log(greeting);

//難度提高版

const age = 14;

let greeting;

if (age < 10) {
  greeting = "Hey there"; 
} else if (age > 18) {
  greeting = "Greetings";  
} else if (age > 10) {
  greeting = "What's up?";  
} else {
  greeting = "That's an interesting age!";  
}
console.log(greeting);

//簡化
const age = 14;

const greeting = age < 10 ? "Hey there" : age > 18 ? "Greetings" : age > 10 ? "What's up?" : "That's an interesting age!";
console.log(greeting);