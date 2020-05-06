const user1 = { name: "john" }
const user2 = { name: "mary" }

const secretKey1 = "asldjfalskdjf";
const secretKey2 = "alksdjfakjsdf";

const secretKeyMap = new Map([
  [user1, secretKey1],
  [user2, secretKey2]  
]);

console.log(secretKeyMap)
//”Map“ 不知道console.log出來這個Map是要衝啥

const key = secretKeyMap.get(user1);
console.log(key);
//"asldjfalskdjf" 出現了secretKey1的東西 
//改成ＷeakMap也一樣是"asldjfalskdjf"
const secretKeyMap = new WeakMap([
  [user1, secretKey1],
  [user2, secretKey2]  
]);
const key = secretKeyMap.get(user1);
console.log(key);

//另一題
const user = {
    name: "john",
    verified: true  
  };
  
  const userMap = new Map([
    ["name", "john"],
    ["verified", true]  
  ]);
  
  console.log(userMap.size);
//"2"  說是因為有兩個東西在[]裡面