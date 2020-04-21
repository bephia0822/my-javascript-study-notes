// Challenge 1:
// What will the following console logs display? (they're all true and false)

console.log("Challenge 1:")
console.log(!undefined); // true 因為有！所以又翻轉一次變true
console.log(Boolean(NaN)); // false
console.log(false === false); // true
console.log(5 === "5"); // false 三個等號就是等於，所以一個是number一個是string
console.log("Hello" == "hello"); // false 兩個等號不等於，而裡面的文字也是不一樣的

// Challenge 2:
// What will the following console logs display? (they're all true and false)
console.log("Challenge 2:")
console.log(Boolean(0)); // false
console.log(Boolean("0")); // true
console.log(Boolean("")); // false
console.log(!null); // true
console.log(!!"hello"); // true

// Challenge 3:
// List all the falsy values in JavaScript
undefined
NaN
null
0
""
false