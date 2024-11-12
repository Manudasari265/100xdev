const express = require('express');
const { getAllTodos, createTodo, updateTodo, deleteTodo } = require('../controllers/todoController.js');

const router = express.Router();

router.get('/', getAllTodos);
router.post('/', createTodo);
router.put('/', updateTodo);
router.delete('/', deleteTodo);

module.exports = {
    router,
}
