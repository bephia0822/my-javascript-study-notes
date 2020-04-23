const result = true || false;  //｜｜就是or的意思。而且只要其中一個是true,console結果就是true
console.log(result);

//舉例 最基本的：
const response = "Reed";

let username;

if (response) {
  username = response;
} else {
  username = "guest";
}

console.log(username);

//可變成
const username = response ? response : "guest";

console.log(username);

//運用｜｜
const username = response || "guest";

console.log(username);


//&&是and的意思。這符號表示的是只有第一個選項成立(true)&&後的才會成立

const result = true && false;
console.log(result);


//運用 像是打這樣就會出現Reed
const response = "Reed";
const isEmailVerified = true;

const username = isEmailVerified && response || "guest";

console.log(username);