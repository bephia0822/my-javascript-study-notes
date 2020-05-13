//弄清楚includes, some, every這三個的不同

const temperatures = [69, 82, 73, 64]; // 0, 1, 2, 3; -1

console.log(temperatures.includes(50));
//false    因為temperature裡面沒有50度

//這邊我們就不能用includes,因為它只適用於容易辨識的數字,string,boolean。這邊用some來得到也是either true or false
const temperatures = [
    { degrees: 69, isRecordTemp: false }, 
    { degrees: 82, isRecordTemp: true }, 
    { degrees: 73, isRecordTemp: false }, 
    { degrees: 64, isRecordTemp: false }
];

const result = temperatures.some(temperature => temperature.isRecordTemp === true);  //只要其中一個有true就會得到true, 如果全部是false的話就會得到false
console.log(result);
//true

//如果換成every就必須全部ture才是true,只要有一個不是就是false
const temperatures = [
    { degrees: 69, isRecordTemp: false }, 
    { degrees: 82, isRecordTemp: true }, 
    { degrees: 73, isRecordTemp: false }, 
    { degrees: 64, isRecordTemp: false }
];

const result = temperatures.every(temperature => !temperature.isRecordTemp); //有！就是false
console.log(result);
//false
const temperatures = [
    { degrees: 69, isRecordTemp: false }, 
    { degrees: 82, isRecordTemp: false }, 
    { degrees: 73, isRecordTemp: false }, 
    { degrees: 64, isRecordTemp: false }
];

const result = temperatures.every(temperature => !temperature.isRecordTemp); //現在都是false
console.log(result);
//true