//因為他講課的部分我聽不太懂，challenge的部分才懂，所以只上傳challenge部分
// Challenge 1: create a conditional that logs out "Good morning!", "Good evening!" and so on depending on the value of time (<- a variable)

// Challenge 2: Rewrite the whole thing as a switch statement

const time = "night" // could be "afternoon", "evening" and "night"改這個就會出現相對應的greeting

if (time === "morning") {
    console.log("Good morning!");
} else if (time === "afternoon") {
    console.log("Good afternoon!");
} else if (time === "evening") {
    console.log("Good evening!");
} else {
    console.log("Good night!");
}
//最後只剩一個的時候可以寫else就好

//好像這兩種都可以
switch (time) {
    case "morning":
        console.log("Good morning!");
    break; 
    case "afternoon":
        console.log("Good afternoon!");
    break; 
    case "evening":
        console.log("Good evening!");
    break;
    default:
        console.log("Good night!");
}

//最後只剩一個的時候可以寫default