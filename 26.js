const user = {
    name: "",
    username: "",
    phoneNumber: "",
    email: "",
    password: ""  
  };
  
  const newUser = {
    username: "ReedBarger",
    email: "reed@gmail.com",
    password: "mypassword"  
  };
  
  console.log(Object.assign(user, newUser));
  //{name: "", username: "ReedBarger", phoneNumber: "", email: "reed@gmail.com", password: "mypassword"} 等於說合併了user跟newUser
  console.log(Object.assign({}, user, newUser));
  //{name: "", username: "ReedBarger", phoneNumber: "", email: "reed@gmail.com", password: "mypassword"}也是一樣

  //然後他加了...雖然不明白，但還是跑出一樣的東西了...好像也是合併的意思
  const createdUser = { ...user, ...newUser, verified: false };
  console.log(createdUser);
  //{name: "", username: "ReedBarger", phoneNumber: "", email: "reed@gmail.com", password: "mypassword", verified: false}

  //但如果把它分開console.log會出現個別的結果，所以也有分開的用意
  //比如
  const createdUser = { ...user, ...newUser, verified: false };
  console.log(user);
  //{name: "", username: "", phoneNumber: "", email: "", password: ""}
  const createdUser = { ...user, ...newUser, verified: false };
  console.log(newUser);
  //{username: "ReedBarger", email: "reed@gmail.com", password: "mypassword"}

