// Challenge: 
// 1. Create an array - favouriteSongs[] -  and add your 3 favourite songs using push()
const favouriteSongs = [];

favouriteSongs.push("Like a rolling stone");
favouriteSongs.push("Blowing in the wind");
favouriteSongs.push("Mr Tambourine man");

console.log(favouriteSongs);
//["Like a rolling stone", "Blowing in the wind", "Mr Tambourine man"]

// 2. Log out the last song in the array, and make it so that your solution will log out the last one regardless of how many items there are in the array
const favouriteSongs = [];
                                             //順序是這樣
favouriteSongs.push("Like a rolling stone"); //0
favouriteSongs.push("Blowing in the wind");  //1
favouriteSongs.push("Mr Tambourine man");    //2
favouriteSongs.push("It aint me");           //3

console.log(favouriteSongs);
console.log(favouriteSongs[favouriteSongs.length - 1])  //-1就是得到最後一個的意思
//It aint me

// 3. Invoke the pop method on your created array. What values do you have left in the array? 
const favouriteSongs = [];

favouriteSongs.push("Like a rolling stone");
favouriteSongs.push("Blowing in the wind");
favouriteSongs.push("Mr Tambourine man");
favouriteSongs.push("It aint me");

console.log(favouriteSongs);

console.log(favouriteSongs[favouriteSongs.length - 1])

favouriteSongs.pop();

console.log(favouriteSongs[favouriteSongs.length - 1])
//Mr Tambourine man     因為剛才log out"It ain't me" 所以就pop away最後一個，“Mr Tambourine man”變最後一個
