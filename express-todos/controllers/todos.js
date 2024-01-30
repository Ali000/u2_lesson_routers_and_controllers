const todo = require("../models/todo");


const title = "Express";

const index = (req, res) => {
  const todos = todo.getAll();
  res.render("todos/index", {todos, title});
}

const show = (req, res) => {
  const todos = todo.getOne(req.params.id);
  res.render("todos/show", { todos });
}

const newTodo = (req, res) => {
  res.render('todos/new', {title: 'New Todo'});
}

const create = (req, res) => {
  console.log(req.body);
  todo.create(req.body); 
  res.redirect('/todos');
};

const deleteTodo = (req, res) => {
  todo.deleteOne(req.params.id);
  res.redirect('/todos');
};

const editTodo = (req, res) => {
  const todo = todo.getOne(req.params.id);
  res.render('todos/edit', {
      todo
  });
};

const update = (req, res) => {
  let todoId = req.params.id;
  let updatedTodo = req.body.todo;
  todo.updateOne(todoId, updatedTodo);
  res.redirect('/todos');
};

module.exports = {
  index, 
  show,
  new: newTodo,
  create,
  delete: deleteTodo,
  edit: editTodo, 
  update
};
