//如何善用object呢？以下是一般的variables

const blueColor= '#00f';
const orangeColor = '#f60';

// variables - boxes; objects - file cabinets

const colors = {
  yellow: '#ff0',
  blue: blueColor,
  orange: orangeColor    
}
console.log(colors);

//會出現“{yellow: "#ff0", blue: "#00f", orange: "#f60"}”

//簡化
const blue = '#00f';
const orange = '#f60';

// variables - boxes; objects - file cabinets

const colors = { yellow: '#ff0', blue, orange };
console.log(colors);

//一樣會出現“{yellow: "#ff0", blue: "#00f", orange: "#f60"}”

//這裡要學的就是如果想得出yellow是用什麼code,可以直接：
console.log(colors.yellow);
//就會得到”#ff0“   
console.log(colors.blue);
//就會得到”#00f“