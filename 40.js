const breakfastMenuIdeas = ["Buckwheat Pancakes"];
const dinnerMenuIdeas = ["Glazed Salmon", "Meatloaf", "American Cheeseburger"];

const allMenuIdeas = ["Harvest Salad", "Southern Fried Chicken"];

const otherMenuIdeas = [...breakfastMenuIdeas, ...allMenuIdeas];
console.log(otherMenuIdeas);
//["Buckwheat Pancakes", "Harvest Salad", "Southern Fried Chicken"]

//加新menu後只取早餐跟新menu或再加上晚餐，滿簡單的方法
const breakfastMenuIdeas = ["Buckwheat Pancakes"];
const dinnerMenuIdeas = ["Glazed Salmon", "Meatloaf", "American Cheeseburger"];

const allMenuIdeas = [
    ...breakfastMenuIdeas, 
    "Harvest Salad", 
    "Southern Fried Chicken",
    ...dinnerMenuIdeas
];
console.log(allMenuIdeas);
//["Buckwheat Pancakes", "Harvest Salad", "Southern Fried Chicken", "Glazed Salmon", "Meatloaf", "American Cheeseburger"]

//這邊比較難懂要注意看喔，用slice，他決定新增一個菜單garden salad
const breakfastMenuIdeas = ["Buckwheat Pancakes"];
const dinnerMenuIdeas = ["Glazed Salmon", "Meatloaf", "American Cheeseburger"];

const allMenuIdeas = [
    ...breakfastMenuIdeas, 
    "Harvest Salad", 
    "Southern Fried Chicken",
    ...dinnerMenuIdeas
];

const saladIndex = allMenuIdeas.findIndex(idea => idea === 'Harvest Salad');

const finalMenuIdeas = [
  ...allMenuIdeas.slice(0, saladIndex),          //從0開始到salad index，然後garden salad就覆寫了harvest salad
  "Garden Salad",
  ...allMenuIdeas.slice(saladIndex + 1)          //接著再從saladIndex的下一個開始
];

console.log(finalMenuIdeas);
//["Buckwheat Pancakes", "Garden Salad", "Southern Fried Chicken", "Glazed Salmon", "Meatloaf", "American Cheeseburger"]

//現在他決定要刪掉Meatloaf
const meatloafIndex = allMenuIdeas.findIndex(idea => idea === 'Meatloaf');

const finalMenuIdeas = [
  ...allMenuIdeas.slice(0, meatloafIndex),          //從0開始到salad index，然後garden salad就覆寫了harvest salad
  ...allMenuIdeas.slice(meatloafIndex + 1)          //接著再從saladIndex的下一個開始
];

console.log(finalMenuIdeas);
//["Buckwheat Pancakes", "Harvest Salad", "Southern Fried Chicken", "Glazed Salmon", "American Cheeseburger"]