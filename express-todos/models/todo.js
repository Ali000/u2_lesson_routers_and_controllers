const todos = [
  {id: 125223, todo: 'Feed Dogs', done: true},
  {id: 127904, todo: 'Learn Express', done: false},
  {id: 139608, todo: 'Buy Milk', done: false}
];


const getAll = () => {
  return todos;
}

getOne = (id) => {
  // return todos.find(todo => todo.id === parseInt(id));
  let todo = todos.find((todo) => {
    return todo.id === parseInt(id);
  });
  return todo;
}

module.exports = {
  getAll,
  getOne
};