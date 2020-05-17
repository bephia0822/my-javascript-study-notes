const user = {
    name: 'John',
    age: 29  
  };
  
  const values = Object.keys(user).map(key => user[key]);
  console.log(values);
  //["John", 29]

  console.log(Object.values(user));  //或者單單這樣一句也可以
  //["John", 29]

  const user = {
    name: 'John',
    age: 29  
  };
  
  console.log(Object.entries(user));
  //[["name", "John"], ["age", 29]]   

  const monthlyExpenses = {
    food: 400,
    rent: 1700,
    insurance: 550,
    internet: 49,
    phone: 95  
  };
  
  const monthlyTotal = Object.values(monthlyExpenses).reduce(
      (acc, expense) => acc + expense, 0
  );
  console.log(monthlyTotal);
  //2794

  //當你有比較多的項目及細項時
  const users = {
    '2345234': {
      name: "John",
      age: 29
    },
    '8798129': {
      name: "Jane",
      age: 42
    },
    '1092384': {
      name: "Fred",
      age: 17 
    }
  };
  
  const usersOver20 = Object.entries(users).reduce((acc, [id, user]) => {
    if (user.age > 20) {
      acc.push({ ...user, id });
    }  
    return acc;
  }, []);
  console.log(usersOver20);
  //[{name: "John", age: 29, id: "2345234"}, {name: "Jane", age: 42, id: "8798129"}]