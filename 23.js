//硬要取名yellow Color(中間空格）時怎麼讓它跑出來

const colors = {
    'yellow Color': '#ff0', //要加‘’
    blue: "#f00",
    orange: "#f60"
  };
  
// console.log(colors.yellow);

  
  console.log(colors['yellow Color']);  //要加[] 


//changing data的時候很方便
const color = 'black';
const hexCode = '#000';

const colors = {
  'yellow Color': '#ff0',
  blue: "#f00",
  orange: "#f60",
  [color]: hexCode
};

// colors[color] = hexCode;
console.log(colors);

//會跑出{yellow Color: "#ff0", blue: "#f00", orange: "#f60", black: "#000"}


//要知道單一code的時候
function getColor(key) {
    return colors[key];
  }


//只有其中一個不要時
delete colors['yellow Color']
console.log(colors);
  
console.log(getColor('orange'));

//或
delete colors.blue;
console.log(colors);
