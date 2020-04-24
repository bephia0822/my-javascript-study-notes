const user1 = "Reed";
const user2 = "Doug";

// const message = `User (user) says: (text)`;

function sendUserMessage(user, text) {
  console.log(`User ${user} says: ${text}`);
}

sendUserMessage(user1, 'Hey there')

//就會出現”User Reed says: Hey there“


const user1 = "Reed";
const user2 = "Doug";

// const message = `User (user) says: (text)`;

function sendUserMessage(user, text) {
  console.log(`User ${user2} says: ${text}`);
}

sendUserMessage(user1, 'Hey there')
//改成user2的話就會出現”User Doug says: Hey there“