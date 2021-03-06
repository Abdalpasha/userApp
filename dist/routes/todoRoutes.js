"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todoController_1 = require("./../controller/todoController");
var express_1 = require("express");
var todoControllerObj = new todoController_1.TodoController();
exports.todoRoutes = express_1.Router();
exports.todoRoutes.post('/create', todoControllerObj.createTodo);
exports.todoRoutes.put('/update/:todoId', todoControllerObj.updateTodoById);
exports.todoRoutes.put('/update', todoControllerObj.updateTodoByName);
exports.todoRoutes.get('/:todoId', todoControllerObj.getById);
exports.todoRoutes.get('/getByName', todoControllerObj.getByName);
exports.todoRoutes.get('/', todoControllerObj.getAllTodo);
