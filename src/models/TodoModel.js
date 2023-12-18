const mongoose = require('mongoose');
const UserModel = require("./UserModel.js");

const TodoSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: UserModel,
  },
  text: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium',
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const TodoModel = mongoose.model('Todo', TodoSchema);

module.exports = TodoModel;
