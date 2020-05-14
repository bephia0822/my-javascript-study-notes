const temperatures = [
    { degrees: 69, isRecordTemp: false },
    { degrees: 82, isRecordTemp: true },
    { degrees: 73, isRecordTemp: false },
    { degrees: 64, isRecordTemp: false }
  ];
  
  const newTemps = temperatures.map(temperature => {
     temperature.isRecordTemp = true; 
     return temperature;
  });
  console.log(newTemps);
 // [{degrees: 69, isRecordTemp: true}, {degrees: 82, isRecordTemp: true}, {degrees: 73, isRecordTemp: true}, {degrees: 64, isRecordTemp: true}]
 //map會讓全部都變成一樣的
 //也可以自己加value (他加了is high)
 const temperatures = [
    { degrees: 69, isRecordTemp: false },
    { degrees: 82, isRecordTemp: true },
    { degrees: 73, isRecordTemp: false },
    { degrees: 64, isRecordTemp: false }
  ];
  
  const newTemps = temperatures.map(temperature => {
     temperature.isHigh = true; 
     return temperature;
  });
  console.log(newTemps);
 //[{degrees: 69, isRecordTemp: false, isHigh: true}, {degrees: 82, isRecordTemp: true, isHigh: true}, {degrees: 73, isRecordTemp: false, isHigh: true}, {degrees: 64, isRecordTemp: false, isHigh: true}]

 //也可以設條件
 const temperatures = [
    { degrees: 69, isRecordTemp: false },
    { degrees: 82, isRecordTemp: true },
    { degrees: 73, isRecordTemp: false },
    { degrees: 64, isRecordTemp: false }
  ];
  
  const newTemps = temperatures.map(temperature => 
  temperature.degrees > 70 ? { ...temperature, isHigh: true } : temperature  //這邊設的是如果溫度大於70的話object為true,冒號代表沒有的話維持原樣
  );
  console.log(newTemps);
  //[{degrees: 69, isRecordTemp: false}, {degrees: 82, isRecordTemp: true, isHigh: true}, {degrees: 73, isRecordTemp: false, isHigh: true}, {degrees: 64, isRecordTemp: false}]
  //沒超過的部分維持原樣，超過的部分會出現isHigh: true
  //map是一個很強大的array method，尤其與條件式一起用時

  //另外這個的話是大於70的會被log out
  newTemps.forEach(temperature => {
    if (temperature.isHigh) {        //如果溫度符合is high也就是大於70度的話log out
      console.log(`Temperature ${temperature.degrees} was a record high last week!`);  
    }
 })
 //Temperature 82 was a record high last week!
 //Temperature 73 was a record high last week!