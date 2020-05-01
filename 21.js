// Challenge: 
// 1. Create three variables - bar, cafe, restaurant - and set their values to a bar, a cafe and a restaurant in your city
// 2. Create an object - favouritePlaces - and populate it with your variables from task 1
// 3. If you're not already using the object property shorthand, refactor your code to do so
// 4. Create a method on the object - greeting() -  that logs out a message to the console
// 5. Invoke the greeting() method and also log out your favourite restaurant to the console

const koreanRestaurant = "兩餐";
const bentoShop = "老牌燒肉飯";
const restaurant = "老四川";

const favouritePlaces = {
    koreanRestaurant: koreanRestaurant,
    bentoShop: bentoShop,
    restaurant: restaurant
}

console.log(favouritePlaces)

//簡化＋greeting
const koreanRestaurant = "兩餐";
const bentoShop = "老牌燒肉飯";
const restaurant = "老四川";

const favouritePlaces = {
    koreanRestaurant,
    bentoShop,
    restaurant,
    greeting() {
        console.log("我最愛吃");
    }
}

console.log(favouritePlaces);

favouritePlaces.greeting();

console.log(favouritePlaces.restaurant)

//會出現"{koreanRestaurant: "兩餐", bentoShop: "老牌燒肉飯", restaurant: "老四川", greeting: ƒ()}"
//"我最愛吃"
//"老四川"
