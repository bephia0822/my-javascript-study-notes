const user = {
    name: "Reed",
    username: "Reedbarger",
    email: "reed@gmail.com",
    details: {
      title: "Programmer"  
    }  
  };
  
  const { title } = user.details
  const { name } = user;
  
  function displayUserBio() {
    console.log(`${name} is a ${title}`); 
  }
  
  displayUserBio()

//會出現”Reed is a Programmer“
//中間兩句合併也一樣會出現”Reed is a Programmer“
const { name, details: { title} } = user;

//改成這樣也是一樣
function displayUserBio({ name, details: { title} }) {
    console.log(`${name} is a ${title}`); 
  }
  
  displayUserBio(user);