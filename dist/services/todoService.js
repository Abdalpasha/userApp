"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var todoModel_1 = require("../model/todoModel");
var TodoService = /** @class */ (function () {
    function TodoService() {
    }
    TodoService.createTodo = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var newTodoItem, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        newTodoItem = new todoModel_1.todoModel(req.body);
                        return [4 /*yield*/, newTodoItem.save()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, newTodoItem];
                    case 2:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [2 /*return*/, err_1];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TodoService.updateTodoByName = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var toDoItem, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, todoModel_1.todoModel.findOneAndUpdate({ "name": req.query.name }, req.body, { new: true }).exec()];
                    case 1:
                        toDoItem = _a.sent();
                        //await toDoItem.save();
                        return [2 /*return*/, toDoItem];
                    case 2:
                        err_2 = _a.sent();
                        console.log(err_2);
                        return [2 /*return*/, err_2];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TodoService.updateTodoById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var toDoItem, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, todoModel_1.todoModel.findById(req.params.todoId).exec()];
                    case 1:
                        toDoItem = _a.sent();
                        toDoItem.description = req.body.description;
                        return [4 /*yield*/, toDoItem.save()];
                    case 2:
                        _a.sent();
                        console.log(toDoItem);
                        return [2 /*return*/, toDoItem];
                    case 3:
                        err_3 = _a.sent();
                        console.log(err_3);
                        return [2 /*return*/, err_3];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TodoService.getAllTodo = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var allTodos, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, todoModel_1.todoModel.find().exec()];
                    case 1:
                        allTodos = _a.sent();
                        return [2 /*return*/, allTodos];
                    case 2:
                        err_4 = _a.sent();
                        console.log(err_4);
                        return [2 /*return*/, err_4];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TodoService.getByName = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var toDoItem, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log("name from queryString : ", req.query.name);
                        return [4 /*yield*/, todoModel_1.todoModel.findOne({ name: req.query.name }).exec()];
                    case 1:
                        toDoItem = _a.sent();
                        return [2 /*return*/, toDoItem];
                    case 2:
                        err_5 = _a.sent();
                        console.log(err_5);
                        return [2 /*return*/, err_5];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TodoService.getById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var toDoItem, err_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log("name from queryString : ", req.params.todoId);
                        return [4 /*yield*/, todoModel_1.todoModel.findById(req.params.todoId).exec()];
                    case 1:
                        toDoItem = _a.sent();
                        return [2 /*return*/, toDoItem];
                    case 2:
                        err_6 = _a.sent();
                        console.log(err_6);
                        return [2 /*return*/, err_6];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return TodoService;
}());
exports.TodoService = TodoService;
