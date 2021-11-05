"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortByCreatedOrder = exports.sortByEndDateDesc = exports.sortByEndDateAsc = exports.removeToDo = exports.updateTodo = exports.addNewTodo = exports.getAllTodos = void 0;
const todo_model_1 = __importDefault(require("../models/todo.model"));
const getAllTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield todo_model_1.default.find();
        res.status(200).json({ todos });
    }
    catch (error) {
        throw error;
    }
});
exports.getAllTodos = getAllTodos;
const addNewTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const todo = new todo_model_1.default({
            title: body.title,
            activeState: body.activeState,
            endDate: body.endDate
        });
        const newTodo = yield todo.save();
        // const allTodos: ITodo[] = await Todo.find()
        res
            .status(201)
            .json({ message: "New Todo added", todo: newTodo });
    }
    catch (error) {
        throw error;
    }
});
exports.addNewTodo = addNewTodo;
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const updateTodo = yield todo_model_1.default.findByIdAndUpdate({ _id: id }, body);
        res.status(200).json({
            message: "Todo updated",
            todo: updateTodo
        });
    }
    catch (error) {
        throw error;
    }
});
exports.updateTodo = updateTodo;
const removeToDo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedToDo = yield todo_model_1.default.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: "Todo deleted",
            todo: deletedToDo
        });
    }
    catch (error) {
        throw error;
    }
});
exports.removeToDo = removeToDo;
const sortByEndDateAsc = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield todo_model_1.default.find({}).sort({ endDate: "asc" });
        res.status(200).json({ todos });
    }
    catch (error) {
        throw error;
    }
});
exports.sortByEndDateAsc = sortByEndDateAsc;
const sortByEndDateDesc = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield todo_model_1.default.find({}).sort({ endDate: "desc" });
        res.status(200).json({ todos });
    }
    catch (error) {
        throw error;
    }
});
exports.sortByEndDateDesc = sortByEndDateDesc;
const sortByCreatedOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield todo_model_1.default.find({}).sort({ createdAt: "asc" });
        res.status(200).json({ todos });
    }
    catch (error) {
        throw error;
    }
});
exports.sortByCreatedOrder = sortByCreatedOrder;
