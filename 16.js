function convertTemperature(celsius, decimalPlaces = 1) {
    // celsius to fahrenheit 攝氏to華氏
//   decimalPlaces = decimalPlaces || 1; 小數點第一位
  const fahrenheit = celsius * 1.8 + 32;
  return Number(fahrenheit.toFixed(decimalPlaces));
}

console.log(convertTemperature(21)); //console.log(convertTemperature(21, 0)); 就會出現整數70

//會出現69.8
