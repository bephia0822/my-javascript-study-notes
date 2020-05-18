//當內容有重複時可用set來篩掉重複的部分
const customerDishes = [
    "Chicken Wings",
    "Fish Sandwich",
    "Beef Stroganoff",
    "Grilled Cheese",
    "Blue Cheese Salad",
    "Chicken Wings",
    "Reuben Sandwich",
    "Grilled Cheese",
    "Fish Sandwich",
    "Chicken Pot Pie",
    "Fish Sandwich",
    "Beef Stroganoff"
  ];
  
  const uniqueDishes = [...new Set(customerDishes)];
  console.log(uniqueDishes)
  //["Chicken Wings", "Fish Sandwich", "Beef Stroganoff", "Grilled Cheese", "Blue Cheese Salad", "Reuben Sandwich", "Chicken Pot Pie"]
  