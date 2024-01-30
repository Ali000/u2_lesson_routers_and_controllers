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

module.exports = {
  index,
  title,
  show
}