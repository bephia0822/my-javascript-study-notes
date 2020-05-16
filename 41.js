const finalMenuItems = [
    "American Cheeseburger",
    "Southern Fried Chicken",
    "Glazed Salmon"
  ];
  
  let first = finalMenuItems[0];
  let second = finalMenuItems[1];
  let third = finalMenuItems[2];
  
  console.log(first, second, third);
  //American Cheeseburger Southern Fried Chicken Glazed Salmon    
  //看有沒有更快的方法
  
  const [first, second, third] = finalMenuItems;
  
  // let first = finalMenuItems[0];
  // let second = finalMenuItems[1];
  // let third = finalMenuItems[2];
  
  console.log(first, second, third);   //console.log(finalMenuItems);這樣也可以
  //American Cheeseburger Southern Fried Chicken Glazed Salmon

  //只想要前兩個時用{}看起來更清楚
  const [first, second] = finalMenuItems;
  console.log({ first },{ second });
  //{first: "American Cheeseburger"},{second: "Southern Fried Chicken"}

  //第一個設為winner, 剩下的use the rest operator把剩下的歸類在同一個，這樣losers就會變成一個新的array
  const [winner, ...losers] = finalMenuItems;

  console.log({ winner, losers });
  //{winner: "American Cheeseburger", losers: ["Southern Fried Chicken", "Glazed Salmon"]}