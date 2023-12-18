const TodoModel = require("../models/TodoModel.js");

const create = async (req, res) => {
  const { text, description, priority, userId } = req.body;
  const todo = new TodoModel({
    text,
    user: userId,
    description:description,
    priority:priority,
    completed: false,
  });

  const newTodo = await todo.save();
  res.json(await newTodo.populate("user"));
};

const remove = async (req, res) => {
  const { id } = req.params;
  const todo = await TodoModel.findById(id);
  await todo.remove();
  res.status(204).json(todo);
};

const read = async (req, res) => {
  const { userId } = req.body;
  const todos = await TodoModel.find({ user: userId });
  res.json(todos);
};

const update = async (req, res) => {
  const { id } = req.params;
  const todo = await TodoModel.findById(id);
  todo.completed = req.body.completed;
  todo.text = req.body.text;
  todo.priority = req.body.priority;
  todo.description = req.body.description;
  await todo.save();
  res.json(todo);
};

module.exports = {
  create,
  remove,
  read,
  update,
};
