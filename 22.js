/*
  undefined, null, boolean, number, string, symbol
*/
// primitive - passed by value  好像是說它們數值是一樣的 或文字是一樣的那他就是一樣的，會出現“true”  

const num = 42;
const anotherNum = 42;
console.log(num === anotherNum);
//"true"
const num = 'hello world';
const anotherNum = 'hello world';
console.log(num === anotherNum);
//"true"

// object - passed by reference 但如果是object的話
const obj = {};
const anotherObj = {};
console.log(obj === anotherObj);
//"false"

//現在這樣才會是一樣的
const obj = {};
const anotherObj = obj;
anotherObj.a = 1;

console.log('obj', obj);
console.log('another obj', anotherObj);
//"obj,{a: 1}"
//"another obj,{a: 1}"
