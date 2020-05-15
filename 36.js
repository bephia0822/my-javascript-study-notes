//用reduce來算購物車裡的物品價錢總和
const menuItems = [
    { item: "Blue Cheese Salad", price: 8 },
    { item: "Spicy Chicken Rigatoni", price: 18 },
    { item: "Ponzu Glazed Salmon", price: 23 },
    { item: "Philly Cheese Steak", price: 13 },
    { item: "Baked Italian Chicken Sub", price: 12 },
    { item: "Pan Seared Ribeye", price: 31 }
  ];
  
  const total = menuItems.reduce((accumulator, menuItem) => {     //reduce會記得你的每個element
    console.log(`
      accumulator: ${accumulator},
      menu item price: ${menuItem.price}
    `);
    return accumulator + menuItem.price;      //accumulator就像一個可以幫我們慢慢往上加的儲藏室，用return才能一直往回加
  }, 0);     //0就是第一個
  console.log(total);
  //accumulator: 0, menu item price: 8
  //accumulator: 8, menu item price: 18
  //accumulator: 26, menu item price: 23
  //accumulator: 49, menu item price: 13
  //accumulator: 62, menu item price: 12
  //accumulator: 74, menu item price: 31
  //105