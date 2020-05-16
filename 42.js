// Challenge: 
// In our restaurant, the chef has some favourite dishes in two different categories.
// The chef loves all dishes that start with "S", while the rest are regular dishes
// Use array destructoring to create arrays of the chefs favourite dishes of meat and
// fish, and to create arrays of the regular meat and fish dishes

const fishDishes = ['Salmon Rillettes', 'Grilled Tuna Provencal', 'Fish and Chips']
const meatDishes = ['Lasagna', 'Spaghetti', 'Satay Chicken Skewers']

// Modify these four variables first 第一題 主要對好他們的位置
let [chefsFishDishes, ...regularFishDishes] = fishDishes;

let [regularMeatDishes ,...chefsMeatDishes] = meatDishes;

console.log(chefsFishDishes);
console.log(regularFishDishes);
console.log(regularMeatDishes);
console.log(chefsMeatDishes);
//Salmon Rillettes
//["Grilled Tuna Provencal", "Fish and Chips"]
//Lasagna
//["Spaghetti", "Satay Chicken Skewers"]

//Finally, use the spread operator to create these two arrays as well 第二題
let chefsDishes = [...chefsMeatDishes, chefsFishDishes]
let regularDishes = [...regularFishDishes, regularMeatDishes];
console.log(chefsDishes);
console.log(regularDishes);
//"Spaghetti", "Satay Chicken Skewers", "Salmon Rillettes"]
//["Grilled Tuna Provencal", "Fish and Chips", "Lasagna"]