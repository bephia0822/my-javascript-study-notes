// Challenge: Write a function splitBill() that lets you know how much 
// you need to pay to split any bill between you and your friends. 
// It should return a message with a number. 

// Write your code below:
//我完全答不出來ＱＱ
function splitBill(amount, numPeople) {
    return `Each person needs to pay ${amount / numPeople}`
} 


// Testing your solution
console.log(splitBill(10, 2))
console.log(splitBill(16, 4))
console.log(splitBill(350, 9))

//console出來長這樣
//Each person needs to pay 5
//Each person needs to pay 4
//Each person needs to pay 38.888888888888886