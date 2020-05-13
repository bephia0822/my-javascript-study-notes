const todos = [];

const todo1 = {
  text: 'Wash the dishes',
  complete: false  
};

const todo2 = {
  text: 'Do laundry',
  complete: false  
};

todos[1] = todo2;
todos[0] = todo1;
console.log(todos);
//[{text: "Wash the dishes", complete: false}, {text: "Do laundry", complete: false}]

const todos = [];

const todo1 = {
  text: 'Wash the dishes',
  complete: false  
};

const todo2 = {
  text: 'Do laundry',
  complete: false  
};

todos.push(todo1, todo2);
// todos[1] = todo2;
// todos[0] = todo1;
console.log(todos);
//[{text: "Wash the dishes", complete: false}, {text: "Do laundry", complete: false}] 一樣