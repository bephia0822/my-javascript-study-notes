//如何使用過濾功能得到想要的結果，用filter，這邊是找出Ｃ開頭的餐廳
const restaurants = [
    { name: 'Cap City Diner', milesAway: 2.2 },
    { name: 'Chop Shop', milesAway: 4.1 },
    { name: 'Northstar Cafe', milesAway: 0.9 },
    { name: 'City Tavern', milesAway: 0.5 },
    { name: 'Shake Shack', milesAway: 5.3 }
  ]
  
  const results = restaurants.filter(restaurant => restaurant.name.startsWith('C'))
  console.log(results);
  //[{name: "Cap City Diner", milesAway: 2.2}, {name: "Chop Shop", milesAway: 4.1}, {name: "City Tavern", milesAway: 0.5}]
  const results = restaurants.filter(restaurant => restaurant.name.startsWith('z'))
  console.log(results);
  //[]  不符合的話就只會出現empty array
  
  //如果設的是完全無關的話則沒有任何選項會被過濾掉
  const results = restaurants.filter(restaurant => true);
  console.log(results);
  //[{name: "Cap City Diner", milesAway: 2.2}, {name: "Chop Shop", milesAway: 4.1}, {name: "Northstar Cafe", milesAway: 0.9}, {name: "City Tavern", milesAway: 0.5}, {name: "Shake Shack", milesAway: 5.3}]

  //再加設一個條件可以用&&
  const results = restaurants.filter(restaurant => 
    restaurant.name.startsWith('C') && restaurant.milesAway < 3
  )
  console.log(results);
  //[{name: "Cap City Diner", milesAway: 2.2}, {name: "City Tavern", milesAway: 0.5}]

  //如果只想找單一物件鎖定那個物件，用find，因為答案只會有一個所以他把results去s
  const result = restaurants.find(restaurant => 
    restaurant.name.toLowerCase().includes('north') && restaurant.milesAway < 2    //這邊他順便示範硬要打小寫也能找到的範例
  )
  console.log(result);
  //{name: "Northstar Cafe", milesAway: 0.9}