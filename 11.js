/* Challenge 1: Let's say you're building Reddit. Only users that are either moderators or have reached a certain karma threshold are allowed to upvote. */

const karma = 130;
const isModerator = false;

// first use a ternary to set hasEnoughKarma to true if karma is above 100. If not, set it to false
let hasEnoughKarma = karma > 100 ? true : false;

//  set the value of canUpvote with short-circuiting (using hasEnoughKarma and isModerator)
let canUpvote = isModerator || hasEnoughKarma;

console.log("canUpvote:", canUpvote);
//這樣就會出現true

/* Challenge 2: Let's say that only moderators who have enough karma are allowed to delete posts.  How would you set the canDelete variable */

// set canDelete to true if both hasEnoughKarma and isModerator is true
let canDelete = hasEnoughKarma && isModerator;

console.log("canDelete:", canDelete);
//這樣就會出現true

// Challenge 3: what is the value of user? What if you switch the hasValidEmail variable to false? What if the response is empty?

const response = "JohnDoe";
const hasValidEmail = true;
const user = hasValidEmail && (response || "guest");
console.log("user: ", user);

//第一個問題會出現user: “JohnDoe" 第二個問題會出現”false" 第三個問題會出現“guest"
