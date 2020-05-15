// Challenge: 
// Use reduce() to sum the weights of all the cars
// Stretch goal: 
// Use reduce to sum the weights of only the electric cars 

//這是我寫的，成功了一半，下一題想不出來ＱＱ
const cars = [
    { name: "Toyota", isElectric: false, weight: 1320 },
    { name: "Ford", isElectric: false, weight: 1400 },
    { name: "Volkswagen", isElectric: false, weight: 1370 },
    { name: "Honda", isElectric: false, weight: 1375 },
    { name: "Tesla", isElectric: true, weight: 1750 },
    { name: "BMW", isElectric: true, weight: 1350 },  
  ];
  
  
  const totalWeight = cars.reduce((accumulator, cars) => {
      console.log(`
      accumulator: ${accumulator},
      the car's weight: ${cars.weight}`)
    return accumulator + cars.weight;  
  }, 0);
  console.log(totalWeight);
  //accumulator: 0, the car's weight: 1320
  //accumulator: 1320, the car's weight: 1400
  //accumulator: 2720, the car's weight: 1370
  //accumulator: 4090, the car's weight: 1375
  //accumulator: 5465, the car's weight: 1750
  //accumulator: 7215, the car's weight: 1350
  //8565

//老師寫的 第一題其實這樣就好了
const totalWeight = cars.reduce((accumulator, car) => {
    return accumulator + car.weight;
}, 0)

console.log(totalWeight);
//8565

//第二題
const totalWeight = cars.reduce((accumulator, car) => {
    if (car.isElectric) {
        return accumulator + car.weight;       //如果是isEletric的話return這樣
    } else {                                   //不是的話，return accumulator itself(我這邊看不太懂) 
        return accumulator;
    }
}, 0)

console.log(totalWeight);
//3100