//當我們想用push把Club Sandwich加到all menu裡時成功log out包含午餐菜單的所有菜單
const lunchMenuIdeas = ['Harvest Salad', 'Southern Fried Chicken'];

const allMenuIdeas = lunchMenuIdeas;

allMenuIdeas.push('Club Sandwich');

console.log(allMenuIdeas);
//["Harvest Salad", "Southern Fried Chicken", "Club Sandwich"]
//但當我們想只log out午餐菜單時卻還是跑出了所有菜單，菜單被copy了

//運用concat
const lunchMenuIdeas = ['Harvest Salad', 'Southern Fried Chicken'];

const allMenuIdeas = lunchMenuIdeas.concat('Club Sandwich');  //這邊創造一個新午餐菜單(new array)加上Club Sandwich，而本來的午餐菜單不會被copy到

// allMenuIdeas.push('Club Sandwich');

console.log(lunchMenuIdeas);
//["Harvest Salad", "Southern Fried Chicken"]

//或者可以用[...]來clone也就是複製一個新的array
const lunchMenuIdeas = ['Harvest Salad', 'Southern Fried Chicken'];

const allMenuIdeas = [...lunchMenuIdeas];

allMenuIdeas.push('Club Sandwich');

console.log(lunchMenuIdeas);
//["Harvest Salad", "Southern Fried Chicken"]  
console.log(allMenuIdeas);
//["Harvest Salad", "Southern Fried Chicken", "Club Sandwich"]  all menu時也完全沒問題
//老師說想像加到購物車的東西出錯就會很麻煩，所以這個很重要