// Challenge: Write a countdown function with a hard-coded starting number inside closure
// Stretch goal: Write a countdown function that can count from a provided number,
// with a provided step

// Start
//我寫的
function countdown() {
    let countingDown = 10;
    return function reduceCount(){
      countingDown -= 1;
      return countingDown;
    }
    console.log(`counting down:`, countingDown);
  }
  
  const countingDown = countdown();
  
  console.log(countingDown());
  console.log(countingDown());
  console.log(countingDown());

  //有成功跑出來！！感動
  //9
  //8
  //7

  //老師寫的
  function countdown() {
    let countFromNum = 11;
    return function decrease() {
      countFromNum -= 1;
      return countFromNum;
    }
  }
  
  const countingDown = countdown();
  
  console.log(countingDown());
  console.log(countingDown());
  console.log(countingDown());

  //這樣也可以
  function countdown(startingNumber, step) {
    let countFromNum = startingNumber;   //let countFromNum = startingNumber + step;這裡如果+step的話就會從開始的那個數開始倒數11,10,9這樣
    return function decrease() {
      countFromNum -= step;
      return countFromNum;
    }
  }
  
  const countingDown = countdown(11, 1);//const countingDown = countdown(20, 5);這樣寫的話就會跑出20,15,10(+step的狀況下)
  
  console.log(countingDown());
  console.log(countingDown());
  console.log(countingDown());