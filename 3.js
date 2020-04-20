let username = "Jane Doe";
let message = `Hi ${username}, how are you?`;
console.log(message);
// 用${}讓code好閱讀也能與前後文有空格

// template literal ``
const weight = 150;
const moonWeight = `You weigh ${weight * 0.165} pounds on the moon`;
console.log(moonWeight);

// `I'm a string`;
// `He said, "I am string."`;

const threeLines = `This is a string 
that spans across 
three lines.
`;
console.log(threeLines);
//而且用``可以讓最後呈現的文字跟你打的一模一樣，例如三行