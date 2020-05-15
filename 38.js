const numbers = [1, 2, 3, 4, 5, 6];

const doubledNumbers = numbers.reduce((acc, num) => {
  acc.push(num * 2);
  return acc;
}, []);
console.log('doubled numbers', doubledNumbers);
console.log('numbers', numbers);
//doubled numbers,[2, 4, 6, 8, 10, 12]
//numbers,[1, 2, 3, 4, 5, 6]

//用map也可以得到一樣的
const numbers = [1, 2, 3, 4, 5, 6];

const doubledNumbers = numbers.map(num => num * 2);
console.log('doubled numbers', doubledNumbers);
console.log('numbers', numbers);
//doubled numbers,[2, 4, 6, 8, 10, 12]
//numbers,[1, 2, 3, 4, 5, 6]

//如何用reduce設條件得到大於3的結果
const greaterNumbers = numbers.reduce((acc, num) => {
    if (num > 3) {
      acc.push(num);
    }  
    
    return acc;
  }, []);
  console.log(greaterNumbers);
  //[4, 5, 6]

//也可以用filter過濾，很明顯的用reduce要寫比較多code
const greaterNumbers = numbers.filter(num => num > 3);
console.log(greaterNumbers);
//[4, 5, 6]